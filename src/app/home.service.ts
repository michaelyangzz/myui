import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from './model/menu';
import { AppSetting } from './appsetting';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  breaditems: MenuItem[] = [];
  rets: MenuItem[] = [];
  menuitems: MenuItem[] = [];

  setBread(item: MenuItem): void {

    this.breaditems.push(item);

    if (item.parentId && this.rets.length)
      this.setBread(this.rets.filter(x => x.id === item.parentId)[0]);
  }

  getMenus(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(AppSetting.Apihost + "getmenus").pipe(
      tap(items => {
        this.rets = items;
        items.forEach(function (value) {
          value.isActive = false;
          value.items = items.filter(x => x.parentId === value.id);
          value.hasChild = value.items.length ? true : false;
        });
        this.menuitems = items.filter(x => x.parentId === null);
      }),
      catchError(this.handleError('getMenus', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
