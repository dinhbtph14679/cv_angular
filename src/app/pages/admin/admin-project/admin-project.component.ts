import { Component, OnInit } from '@angular/core';
import { ProjectServicesService } from 'src/app/services/project-services.service';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {

  data: any;


  constructor(private ProjectServicesService:ProjectServicesService) { }

  ngOnInit(): void {
    this.ProjectServicesService.getBlogsList().subscribe(data => {
      this.data = data
    })
  }

  onHandleRemove(id: number){
    if (confirm("bạn muốn xóa sản phẩm") == true) {
      this.ProjectServicesService.removeBlogs(id).subscribe((data) => {
        this.ngOnInit()
      })
    }
  }
}
