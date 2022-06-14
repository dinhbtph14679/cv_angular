import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iblogs } from 'src/app/models/blog';
import { BlogServices } from 'src/app/services/blog-services.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogs: Iblogs = {
    name: '',
    description: '',
    img: "",
    userCreate: ""
  };


  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private blogservices: BlogServices
  ) { }

  ngOnInit(): void {
    const id = +this.activateRouter.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogservices.getBlogs(id).subscribe((data) => {
        this.blogs = data;
      });
    }
  }

  onSubmit() {
    const id = +this.activateRouter.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogservices.updateBlogs(this.blogs).subscribe((data) => {
        setTimeout(() => {
          this.router.navigateByUrl(`admin/blog`);
        }, 2000);
      });
    }
    this.blogservices.addBlogs(this.blogs).subscribe((data) => {
      setTimeout(() => {
        this.router.navigateByUrl('admin/blog');
      },2000);
    });
  }

}
