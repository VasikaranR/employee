import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component'


@NgModule({
  declarations: [
     SampleComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    HttpClientModule
    
  ]
})
export class SampleModule { }
