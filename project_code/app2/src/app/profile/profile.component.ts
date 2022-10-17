import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileList:any=[]
  data:any
  employeeRole:any
  joined:any
  projects:any
  ratings:any
 

  constructor(private http:HttpClient,private profileService:ProfileService) { }
  val:any =localStorage.getItem('name');


  ngOnInit(): void {
    
   this.profileService.profileData(this.val).subscribe((data)=>{
    this.profileList=data
    this.employeeRole=this.profileList[0].employeeRole
    this.joined=this.profileList[0].joined
    this.projects=this.profileList[0].projects
    this.ratings=this.profileList[0].ratings
    }) 

  }
   
}

