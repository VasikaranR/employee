import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { 

  }

  description(id:any){
    return this.http.get(`http://localhost:3000/data?project_id=${id}`)
  }

  userData(userName:any){
    return this.http.get(`http://localhost:3000/data?assigned=${userName}`)
  }
  
  adminData(){
    return this.http.get(`http://localhost:3000/data`)
  }
}
