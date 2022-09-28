import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
   name:any
   localStorage: any;
    constructor(private router:Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('name')
    console.log("this is the name",this.name)
  }
  
  login(){
    this.router.navigate(['/sample1']).then(()=>{
      window.location.reload();
    })
  }

  logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    this.router.navigate(['/sample1']).then(()=>{
      window.location.reload();
    })
  }
}
