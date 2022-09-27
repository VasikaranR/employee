import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})



export class SampleComponent implements OnInit {
  
  userList:any=[]



  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/data").subscribe((data)=>{
     console.log(data)
     this.userList=data ;
     console.log("data varuthu",this.userList)

    })
  }

}
