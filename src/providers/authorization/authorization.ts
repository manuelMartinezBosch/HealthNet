import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the AuthorizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthorizationProvider {

  // private readonly BASE_URL = "https://api-nutrition.herokuapp.com";
  private readonly BASE_URL = "https://localhost:5001";
  constructor(public http: HttpClient) {
  }

  authorize (mail: string, password: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(
      `${this.BASE_URL}/Authorization`, 
      { "mail": mail,
        "password": password
      },
      httpOptions).pipe(
        map((res: any) => {
          if(res == null) throw new HttpErrorResponse({status: 204});
          return res.token;
        }),
        catchError((err: HttpErrorResponse) => { throw err.status })
      );
  }
}
