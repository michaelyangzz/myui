import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { MenuItem } from '../model/menu';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.css']
})
export class NavlistComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getMenus();
  }

  menus: MenuItem[];

  getMenus(): void {
    this.homeService.getMenus().subscribe(items => this.menus=items);
  }
}
