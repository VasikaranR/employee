import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})



export class SampleComponent implements OnInit {
  
  userList:any=[]
  adminList:any=[]
  
  

  constructor(private http:HttpClient) { 

  }
  
  userName=localStorage.getItem('name');
  role=localStorage.getItem('role');
  

  ngOnInit(): void {
    this.http.get(`http://localhost:3000/data?assigned=${this.userName}`).subscribe((data)=>{
     console.log(data)
     console.log("from local",this.userName)
     this.userList=data ;
     console.log("data varuthu",this.userList[0].assigned)

    })


    this.http.get(`http://localhost:3000/data`).subscribe((data1)=>{
      console.log(data1)
      this.adminList=data1;
      

  })
   

}
}
