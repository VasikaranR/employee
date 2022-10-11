import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projectList:any=[]
  project_name:any
  domain:any
  budget:any
  project_id:any

  constructor(private http:HttpClient,private router:Router) { }
    role=localStorage.getItem('role');
    ngOnInit(): void {
      this.http.get(`http://localhost:3000/data`).subscribe((data)=>{
        console.log("projects component ",data)
        this.projectList=data; 

    })
  }
  backTo(){
    console.log("heelo");
    
    this.router.navigate(['user']);
  }
}
