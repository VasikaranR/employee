import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule }from '@angular/common/http/testing'

import { AllUsersComponent } from './all-users.component';
import { AllusersService } from './allusers.service';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;
  let service:AllusersService
  let data = {
    employeeRole: "Software analyst",
    joined: "2022",
    password: "Vasikaran",
    projects: "6",
    ratings: "9.2",
    role: "admin",
    userEmail: "vasichan2000@gmail.com",
    userName: "Vasikaran"
  }
  let user='Vasikaran'
  let content='content'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[AllusersService],
      declarations: [AllUsersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.get(AllusersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call a http',() =>{
     const callHttp=spyOn(service,'allusers').and.callThrough();
     component.ngOnInit();
     expect(callHttp).toHaveBeenCalled()
  })

  it('should call another http',()=>{
    const callAnotherHttp=spyOn(service,'viewAllProjects').and.callThrough();
    component.viewProjects(content,user);
    expect(callAnotherHttp).toHaveBeenCalled()

  })

 

});
