import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(readonly http: HttpClient) { }

  login(credentials: any) {

    //we should encrypt password pwd here
    
    return this.http.get('bokadedarvin/AngularDeveloperSample/users').pipe(
      map((res: any) => {
        return res;
      }), catchError(this.handleErrorObservable)
    );
  }

  getStatus() {
    return localStorage.getItem('user_data');
  }
  handleErrorObservable(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
