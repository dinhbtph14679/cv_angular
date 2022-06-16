import { Component, OnInit } from '@angular/core';
import { ProjectServicesService } from 'src/app/services/project-services.service';

@Component({
  selector: 'app-project-cv',
  templateUrl: './project-cv.component.html',
  styleUrls: ['./project-cv.component.css']
})
export class ProjectCvComponent implements OnInit {

  bloglist!: any

  constructor(private ProjectServicesService:ProjectServicesService) { }

  ngOnInit(): void {
    this.getBlogs()
  }
  getBlogs(){
    this.ProjectServicesService.getBlogsList().subscribe((data) => {
      console.log(data);
      this.bloglist = data;
      console.log(this.bloglist);

    });
  }
}
