import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.css']
})
export class HeaderDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() isShowTask: boolean;

  @Input() isShowBell: boolean;

  @Input() isShowEmail: boolean;
}
