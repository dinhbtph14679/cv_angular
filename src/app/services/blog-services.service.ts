import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Iblogs } from '../models/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServices {

  API_URL = "http://localhost:3001/blogs"

  constructor( private htpp: HttpClient) { }

  getBlogs(id: any):Observable<Iblogs>{
    return this.htpp.get<Iblogs>(`${this.API_URL}/${id}`)
  }
  getBlogsList():Observable<Iblogs[]>{
    return this.htpp.get<Iblogs[]>(`${this.API_URL}`)
  }
  addBlogs(blogs: Iblogs):Observable<Iblogs>{
    return this.htpp.post<Iblogs>(`${this.API_URL}`,blogs)
  }
  updateBlogs(blogs: Iblogs):Observable<Iblogs>{
    return this.htpp.put<Iblogs>(`${this.API_URL}`,blogs)
  }
  removeBlogs(id: number):Observable<Iblogs>{
    return this.htpp.delete<Iblogs>(`${this.API_URL}/${id}`)
  }
}
