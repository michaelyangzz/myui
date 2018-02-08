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
      this.router.navigate([eachmenu.url]);

      if (this.preMenu)
        this.preMenu.isActive = false;

      eachmenu.isActive = true;

      this.preMenu = eachmenu;
  
      if (goJS.isNeedCloseNavList()) {
        goJS.CloseNavList();
      };

    }
  }
}
