import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';


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
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopMenu2Component } from './top-menu2/top-menu2.component';
import { TopMenu4Component } from './top-menu4/top-menu4.component';
import { TopMenu5Component } from './top-menu5/top-menu5.component';
import { ElementsComponent } from './elements/elements.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GlobalHttpService } from './global-http.service';
import { HeroFormComponent } from './hero-form/hero-form.component';

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
    DashboardComponent,
    TopMenuComponent,
    TopMenu2Component,
    TopMenu4Component,
    TopMenu5Component,
    ElementsComponent,
    HomeComponent,
    LoginComponent,
    HeroFormComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgHttpLoaderModule],
  providers: [GlobalHttpService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
