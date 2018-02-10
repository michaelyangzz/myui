import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from './model/menu';
import { AppSetting } from './appsetting';
import { GlobalHttpService } from './global-http.service';

@Injectable()
export class HomeService {

  constructor(private http: GlobalHttpService) { }

  breaditems: MenuItem[] = [];
  rets: MenuItem[] = [];
  menuitems: MenuItem[] = [];

  setBread(item: MenuItem): void {

    this.breaditems.push(item);

    if (item.parentId && this.rets.length)
      this.setBread(this.rets.filter(x => x.id === item.parentId)[0]);
  }

  getMenus(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(AppSetting.Apihost + "getmenus", "getMenus")
      .pipe(
      tap(items => {
        this.rets = items;
        items.forEach(function (value) {
          value.isActive = false;
          value.items = items.filter(x => x.parentId === value.id);
          value.hasChild = value.items.length ? true : false;
        });
        this.menuitems = items.filter(x => x.parentId === null);
      })
      );
  }

  login(usr: string): Observable<number> {
    return this.http.post<number>(AppSetting.Apihost + "login", { u: usr }, "login");
  }

}
