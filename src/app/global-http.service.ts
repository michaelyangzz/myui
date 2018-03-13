import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from './model/menu';
import { AppSetting } from './appsetting';
import { Router } from '@angular/router';

@Injectable()
export class GlobalHttpService {

  constructor(private http: HttpClient, private router: Router) { }

  get<T>(url: string, operation: string): Observable<T> {
    return this.http.get<T>(url, AppSetting.httpOptions).pipe(
      catchError(this.handleError<T>(operation))
    );
  }

  post<T>(url: string, data: any, operation: string): Observable<T> {
    return this.http.post<T>(url, data, AppSetting.httpOptions).pipe(
      catchError(this.handleError<T>(operation))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} faileddd: ${error.message}`);
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      if (error.status == 401)
        this.router.navigate(['login']);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
