import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  loginCallOne(val:any){
    return this.http.get(`http://localhost:4000/userDetails?password=${val}`)
   
  }

  loginCallTwo(emailVal:any){
    return this.http.get(`http://localhost:4000/userDetails?userEmail=${emailVal}`)
  }
}



