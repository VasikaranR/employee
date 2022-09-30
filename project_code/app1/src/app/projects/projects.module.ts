import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
