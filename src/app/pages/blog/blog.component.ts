import { Component, OnInit } from '@angular/core';
import { Iblogs } from 'src/app/models/blog';
import { BlogServices } from 'src/app/services/blog-services.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  bloglist!: any

  constructor(private BlogServices:BlogServices) { }

  ngOnInit(): void {
    this.getBlogs()
  }
  getBlogs(){
    this.BlogServices.getBlogsList().subscribe((data) => {
      console.log(data);
      this.bloglist = data;
      console.log(this.bloglist);

    });
  }
}
