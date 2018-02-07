import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { NavlistComponent } from './navlist/navlist.component';
import { SidebarShortcutsComponent } from './sidebar-shortcuts/sidebar-shortcuts.component';
import { SidebarToggleComponent } from './sidebar-toggle/sidebar-toggle.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlankComponent } from './blank/blank.component';
import { HomeService } from './home.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDropdownComponent,
    NavlistComponent,
    SidebarShortcutsComponent,
    SidebarToggleComponent,
    BreadcrumbComponent,
    NavSearchComponent,
    BlankComponent,
    DashboardComponent
  ],
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
