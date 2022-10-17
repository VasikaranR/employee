import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgToastService} from'ng-angular-popup'
import { LoginService } from '../sample1/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordList:any=[]
  emailList:any=[]
  roleList:any=[]
  userNameList:any=[]
  passwordVer:any
  EmailVer:any
  role:any
   

  ngOnInit(): void {
   
  }
  loginForm!: FormGroup | any;

  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router, private toast:NgToastService, private loginDataService:LoginService) { 

  this.loginForm = this.formbuilder.group({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^([A-Z]{1})[a-z0-9]{7,11}$')]),
  });
}
get email() {
  return this.loginForm.get('email')
}
get password() {
  return this.loginForm.get('password')
}

login(){

  var val=this.loginForm.value.password
  var emailVal=this.loginForm.value.email

  console.log("static data",this.loginForm.value)
  console.log("this is val",val)
  this.loginDataService.loginCallOne(val).subscribe((data)=>{
    console.log("this is data from data",data)
    this.passwordList=data;
    this.passwordVer=this.passwordList[0].password
    this.roleList=this.passwordList[0].role
    this.userNameList=this.passwordList[0].userName
  
  })

  this.loginDataService.loginCallTwo(emailVal).subscribe(async(data1)=>{
    console.log("this is data from data1",data1)

  
    this.emailList=data1
    this.EmailVer=await this.emailList[0].userEmail
    

    if(this.EmailVer==emailVal){
      if(this.passwordVer==val){
       this.toast.success({detail:'Success',summary:"login successful",duration:5000,position:'tr'})
       localStorage.setItem("email",emailVal)
       localStorage.setItem("role",this.roleList)
       localStorage.setItem("name",this.userNameList)
       this.router.navigate(['user']).then(()=>{
         window.location.reload();
       })
      }
      else{
       alert("either password  is incorrect")
      }
    }else{
     alert("email is incorrect ")
    }
 
   
    
  })
 
 
}




}


 




