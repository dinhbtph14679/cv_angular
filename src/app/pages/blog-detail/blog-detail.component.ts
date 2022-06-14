import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServices } from 'src/app/services/blog-services.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog: any

  constructor(
    private router: Router,
    private Blogservice: BlogServices,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.ActivatedRoute.snapshot.paramMap.get('id')!;
    this.Blogservice.getBlogs(id).subscribe((data) => {
      this.blog = data
    })

  }

}
