import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})



export class SampleComponent implements OnInit {
  
  userList:any=[]
  adminList:any=[]
  descriptionList:any=[]
  userName:any=localStorage.getItem('name');
  role:any=localStorage.getItem('role');
  content: any;

  constructor(private http:HttpClient, private router:Router,config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  open(content:any,id:any) {
    
    this.http.get(`http://localhost:3000/data?project_id=${id}`).subscribe((data3)=>{
      console.log("this is data 3",data3);
      this.descriptionList=data3;

  
     })
     this.modalService.open(content);
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
desc(){
  this.router.navigate(['description']);
}

}
