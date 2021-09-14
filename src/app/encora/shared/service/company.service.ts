import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(readonly http: HttpClient) { }

  getCompany() {    
    return this.http.get('bokadedarvin/AngularDeveloperSample/companies').pipe(
      map((res: any) => {
        return res;
      }), catchError(this.handleErrorObservable)
    );
  }
  getContacts(){
    return this.http.get('bokadedarvin/AngularDeveloperSample/contacts').pipe(
      map((res: any) => {
        return res;
      }), catchError(this.handleErrorObservable)
    );
  }

  handleErrorObservable(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
