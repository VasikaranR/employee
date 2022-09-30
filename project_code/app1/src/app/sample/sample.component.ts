import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})



export class SampleComponent implements OnInit {
  
  userList:any=[]
  adminList:any=[]
  userName:any=localStorage.getItem('name');
  role:any=localStorage.getItem('role');

  

  constructor(private http:HttpClient, private router:Router) { 

  }
  
  
  

  ngOnInit(): void {
    console.log(this.userName)
    this.http.get(`http://localhost:3000/data?assigned=${this.userName}`).subscribe((data)=>{
     console.log(data)
     console.log("from local",this.userName)
     this.userList=data ;
     console.log("data varuthu",this.userList[0])

    })


    this.http.get(`http://localhost:3000/data`).subscribe((data1)=>{
      console.log(data1)
      this.adminList=data1;
      
  })
 
}
allProjects(){
   console.log("came")
    this.router.navigate(['projects']);
}
allUsers(){
    this.router.navigate(['allUsers']);
}
}
