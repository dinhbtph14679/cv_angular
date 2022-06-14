import { Component, OnInit } from '@angular/core';
import { Iblogs } from 'src/app/models/blog';
import { BlogServices } from 'src/app/services/blog-services.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  data: any;


  constructor(private BlogServices:BlogServices) { }

  ngOnInit(): void {
    this.BlogServices.getBlogsList().subscribe(data => {
      this.data = data
    })
  }

  onHandleRemove(id: number){
    if (confirm("bạn muốn xóa sản phẩm") == true) {
      this.BlogServices.removeBlogs(id).subscribe((data) => {
        this.ngOnInit()
      })
    }
  }
}

