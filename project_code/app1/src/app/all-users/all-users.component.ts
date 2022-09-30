import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  usersList:any=[]
  constructor( private http:HttpClient) { }
  val:any
  ngOnInit(): void {
    this.http.get(`http://localhost:4000/userDetails?=userName`).subscribe((data)=>{
        console.log("projects component ",data)
        this.usersList=data; 

  })

}
}
