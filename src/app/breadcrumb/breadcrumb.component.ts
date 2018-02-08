import { Component, OnInit} from '@angular/core';
import { MenuItem } from '../model/menu';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.items = this.home.breaditems;
  }

  items: MenuItem[];

}
