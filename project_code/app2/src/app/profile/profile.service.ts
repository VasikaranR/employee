import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  profileData(val:any){
    return this.http.get(`http://localhost:4000/userDetails?userName=${val}`)
  }
}
  