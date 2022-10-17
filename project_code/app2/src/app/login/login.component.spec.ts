import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '../sample1/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:LoginService
  let de=DebugElement
  let el=HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(async ()=>{
    fixture=TestBed.createComponent(LoginComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();     
    })

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a http request ',()=>{
    const httpCall=spyOn(service,'loginCallOne').and.callThrough();
    component.ngOnInit();
    expect(httpCall).toHaveBeenCalled()
  })

   it ('test the formGroup elementt count ',()=>{
      const formElement=fixture.debugElement.nativeElement.querySelector('loginForm')
      const inputElement=formElement.querySelectorAll('input');
      expect(inputElement.length).toEqual(2);
  })




});




