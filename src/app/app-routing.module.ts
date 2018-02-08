import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, RoutesRecognized } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopMenu2Component } from './top-menu2/top-menu2.component';
import { TopMenu4Component } from './top-menu4/top-menu4.component';
import { TopMenu5Component } from './top-menu5/top-menu5.component';
import { ElementsComponent } from './elements/elements.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';

const routes: Routes = [
  { path: 'blank', component: BlankComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'topmenu', component: TopMenuComponent },
  { path: 'topmenu2', component: TopMenu2Component },
  { path: 'topmenu4', component: TopMenu4Component },
  { path: 'topmenu5', component: TopMenu5Component },
  { path: 'elements', component: ElementsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/blank', pathMatch: 'full' }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {
  constructor(private router: Router, private home: HomeService) {
    router.events.subscribe(event => { 
      if (event instanceof RoutesRecognized) {
        if (event.urlAfterRedirects === "/home") {
          this.home.breaditems.splice(0, this.home.breaditems.length);
        }
      }
    });
  }
}
