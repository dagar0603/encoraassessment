import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { appRoutesNames } from '../../app.routes.names';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    protected router: Router,
  ) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = localStorage.getItem("user_data");
    if (!user?.length) {
      this.router.navigate([`${appRoutesNames.LOGIN}`]);
    }
    request = request.clone({ url: `${environment.baseApiURL}/${request.url}`, setHeaders: { Accept: 'application/json' }, withCredentials: true });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate([`${appRoutesNames.LOGIN}`]);
        }
        return throwError(error);
      })
    );
  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
