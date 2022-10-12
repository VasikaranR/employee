import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AllusersService } from './allusers.service';




@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class AllUsersComponent implements OnInit {
  usersList:any=[]
  viewProjectsList:any=[]
  constructor( private http:HttpClient,private router:Router,config: NgbModalConfig, private modalService: NgbModal,private allUserService:AllusersService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  val:any
  
  ngOnInit(): void {
    this.allUserService.allusers().subscribe((data)=>{
        console.log("projects component ",data)
        this.usersList=data; 

  })
 
}

back(){
  this.router.navigate(['user']);
}

viewProjects(content:any,user:any){
 this.allUserService.viewAllProjects(user).subscribe((data1)=>{
     console.log('all users ',data1);
     this.viewProjectsList=data1
  })
  this.modalService.open(content)
}
}
