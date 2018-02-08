import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { MenuItem } from '../model/menu';

declare var goJS;

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.css']
})
export class NavlistComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getMenus();
  }

  menus: MenuItem[];

  getMenus(): void {
    this.homeService.getMenus().subscribe(items => this.menus = items);
  }

  preMenu: MenuItem;

  clickMenu(eachmenu: MenuItem): void {
    if (eachmenu.hasChild) {
    }
    else {
      this.activemenu(eachmenu);
      this.router.navigate([eachmenu.url]);
      this.homeService.breaditems.splice(0, this.homeService.breaditems.length);
      this.homeService.setBread(eachmenu);
      this.homeService.breaditems.sort(function (a, b) { return a.id - b.id; });
      if (goJS.isNeedCloseNavList()) {
        goJS.CloseNavList();
      };
    }
  }

  private activemenu(eachmenu: MenuItem): void {
    if (this.preMenu)
      this.preMenu.isActive = false;
    eachmenu.isActive = true;
    this.preMenu = eachmenu;
  }

  private haschildactivemenu(eachmenu: MenuItem): boolean {

    if (eachmenu.items.length) {
      for (var i = 0; i < eachmenu.items.length; i++) {

        if (eachmenu.items[i].isActive)
          return true;
        else
          return this.haschildactivemenu(eachmenu.items[i]);
      }
    }
    return false;
  }
}
