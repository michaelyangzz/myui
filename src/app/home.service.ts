import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from './model/menu';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  breaditems: MenuItem[] = [];
  rets: MenuItem[] = [];
  private apihost = "http://localhost:4200/assets/data/";

  setBread(item: MenuItem): void {

    this.breaditems.push(item);

    if (item.parentId && this.rets.length)
      this.setBread(this.rets.filter(x => x.id === item.parentId)[0]);
  }

  lapingmenu(item: MenuItem): void {
    this.rets.push(item);

    if (item.items.length) {
      for (var i = 0; i < item.items.length; i++) {
        this.lapingmenu(item.items[i]);
      }
    }
  }

  getMenus(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apihost + "menu.json").pipe(
      tap(items => {
        this.rets.splice(0, this.rets.length);
        for (var i = 0; i < items.length; i++) {
          this.lapingmenu(items[i]);

          

        }
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
