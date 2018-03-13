import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.userName = "123";
  }

  userName: string;

  login(): void {
 
    this.home.login(this.userName).subscribe(r => {
      if (r === 1) {
        alert('login ssssss');
        this.home.getMenus().subscribe();
      }
    });
  }
}
