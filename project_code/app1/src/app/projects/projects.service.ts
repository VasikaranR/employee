import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  projectList(){
    return  this.http.get(`http://localhost:3000/data`)
  }

  allProjectDetails(id:any){
    return this.http.get(`http://localhost:3000/data?project_id=${id}`)
  }
}
