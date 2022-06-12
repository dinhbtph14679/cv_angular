import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCvComponent } from './pages/project-cv/project-cv.component';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { LayoutClientComponent } from './layouts/client/layout-client/layout-client.component';
import { AdminBlogComponent } from './pages/admin/admin-blog/admin-blog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { AdminProjectComponent } from './pages/admin/admin-project/admin-project.component'
import { HttpClientModule } from '@angular/common/http';
import { AddBlogComponent } from './components/add-blog/add-blog.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    MenuComponent,
    BlogComponent,
    FooterComponent,
    ProjectCvComponent,
    DetailProjectComponent,
    ContactComponent,
    AdminLayoutComponent,
    LayoutClientComponent,
    AdminBlogComponent,
    FooterAdminComponent,
    NavAdminComponent,
    AdminProjectComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
