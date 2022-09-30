import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleModule } from './sample/sample.module';
import { ProjectsModule } from './projects/projects.module';
import { AllUsersModule } from './all-users/all-users.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleModule,
    CommonModule,
    ProjectsModule,
    AllUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
