import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpBackend, HttpClientModule } from '@angular/common/http';


import { Sample1RoutingModule } from './sample1-routing.module';
import { Sample1Component } from './sample1.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';



@NgModule({
  declarations: [
    Sample1Component,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    Sample1RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class Sample1Module { }
