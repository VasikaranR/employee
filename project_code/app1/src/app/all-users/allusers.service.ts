import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {

  constructor(private http:HttpClient) { 

  }



  allusers(){
    return this.http.get(`http://localhost:4000/userDetails?=userName`)
  }

  viewAllProjects(user:any){
    return this.http.get(`http://localhost:3000/data?assigned=${user}`)
  }

}
