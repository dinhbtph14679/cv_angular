import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Iblogs } from '../models/blog';
import { Observable } from 'rxjs';
import { IProject } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectServicesService {

  API_URL = "http://localhost:3001/projects"

  constructor( private htpp: HttpClient) { }

  getBlogs(id: any):Observable<IProject>{
    return this.htpp.get<IProject>(`${this.API_URL}/${id}`)
  }
  getBlogsList():Observable<IProject[]>{
    return this.htpp.get<IProject[]>(`${this.API_URL}`)
  }
  addBlogs(blogs: IProject):Observable<IProject>{
    return this.htpp.post<IProject>(`${this.API_URL}`,blogs)
  }
  updateBlogs(blogs: IProject):Observable<IProject>{
    return this.htpp.put<IProject>(`${this.API_URL}`,blogs)
  }
  removeBlogs(id: number):Observable<IProject>{
    return this.htpp.delete<IProject>(`${this.API_URL}/${id}`)
  }
}
