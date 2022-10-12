import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from './projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class ProjectsComponent implements OnInit {
  
  projectList:any=[]
  project_name:any
  domain:any
  budget:any
  project_id:any
  projectDataList:any=[]
  content:any


  constructor(private http:HttpClient,private router:Router,config: NgbModalConfig, private modalService: NgbModal,private projectService:ProjectsService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
    role=localStorage.getItem('role');
    ngOnInit(): void {
    this.projectService.projectList().subscribe((data)=>{
        console.log("projects component ",data)
        this.projectList=data; 
    })
  }
  backTo(){
    console.log("heelo");
    
    this.router.navigate(['user']);
  }
  
  details(content:any,id:any){
    this.projectService.allProjectDetails(id).subscribe((data1)=>{
      console.log('more details',data1);
      this.projectDataList=data1
    })
    this.modalService.open(content);
  }
}
