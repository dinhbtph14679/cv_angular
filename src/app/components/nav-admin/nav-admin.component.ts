import { Component, OnInit } from '@angular/core';
import { faNewspaper, faDiagramProject, faHouseUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faNewspaper = faNewspaper;
  faDiagramProject = faDiagramProject;
  faHouseUser = faHouseUser;
}
