import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { LayoutClientComponent } from './layouts/client/layout-client/layout-client.component';
import { AdminBlogComponent } from './pages/admin/admin-blog/admin-blog.component';
import { AdminProjectComponent } from './pages/admin/admin-project/admin-project.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ProjectCvComponent } from './pages/project-cv/project-cv.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutClientComponent , children: [
      {
        path: "", component: HomePagesComponent, pathMatch: "full"
      },
      {
        path: "project", children: [
          {
            path: "", component: ProjectCvComponent
          },
          {
            path: ":id", component: DetailProjectComponent
          }
        ]
      },
      {
        path: "blog", children: [
          {
            path: "", component: BlogComponent
          },
          {
            path: ":id", component: BlogDetailComponent
          }
        ]
      },
      {
        path: "contact", component: ContactComponent
      }
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      {
        path: "dashboard", component: ContactComponent
      },
      {
        path: "blog", children: [
          {
            path: "", component: AdminBlogComponent
          },
          {
            path: "add", component: AddBlogComponent
          },
          {
            path: "edit/:id", component: AddBlogComponent
          }
        ]
      },
      {
        path: "project", component: AdminProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
