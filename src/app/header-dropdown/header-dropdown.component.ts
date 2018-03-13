import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.css']
})
export class HeaderDropdownComponent implements OnInit {

  constructor(private home: HomeService) { }

  ngOnInit() {
  }

  @Input() isShowTask: boolean;

  @Input() isShowBell: boolean;

  @Input() isShowEmail: boolean;

  Logout(): void {
    this.home.logout().subscribe(r => {
      if (r === 1) {
        alert('logout hahah');
      }
    });
  }
}
