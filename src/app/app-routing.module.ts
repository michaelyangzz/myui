import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopMenu2Component } from './top-menu2/top-menu2.component';
import { TopMenu4Component } from './top-menu4/top-menu4.component';
import { TopMenu5Component } from './top-menu5/top-menu5.component';
import { ElementsComponent } from './elements/elements.component';

const routes: Routes = [
  { path: 'blank', component: BlankComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'topmenu', component: TopMenuComponent },
  { path: 'topmenu2', component: TopMenu2Component },
  { path: 'topmenu4', component: TopMenu4Component },
  { path: 'topmenu5', component: TopMenu5Component },
  { path: 'elements', component: ElementsComponent },
  { path: '', redirectTo: '/blank', pathMatch: 'full' }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }
