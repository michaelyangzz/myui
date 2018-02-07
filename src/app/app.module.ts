import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { NavlistComponent } from './navlist/navlist.component';
import { SidebarShortcutsComponent } from './sidebar-shortcuts/sidebar-shortcuts.component';
import { SidebarToggleComponent } from './sidebar-toggle/sidebar-toggle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlankComponent } from './blank/blank.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDropdownComponent,
    NavlistComponent,
    SidebarShortcutsComponent,
    SidebarToggleComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    NavSearchComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
