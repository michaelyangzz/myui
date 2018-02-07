import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  { path: 'blank', component: BlankComponent },
  { path: '', redirectTo: '/blank', pathMatch: 'full' }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }
