import { Component, OnInit } from '@angular/core';
import { Iblogs } from 'src/app/models/blog';
import { BlogServices } from 'src/app/services/blog-services.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  bloglist!: Iblogs[]

  constructor(private BlogServices:BlogServices) { }

  ngOnInit(): void {
    this.getBlogs()
  }
  getBlogs(){
    this.BlogServices.getBlogsList().subscribe((data) => {
      this.bloglist = data;
    });
  }
  onHandleRemove(id: number){
    const a = confirm("Bạn có muốn xóa bài viết này không?");
    if (a) {
      this.BlogServices.removeBlogs(id).subscribe(() => {
        this.bloglist = this.bloglist.filter(item => item.id !== id);
      })
    }
  }
}

