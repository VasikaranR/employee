import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component'


@NgModule({
  declarations: [
     SampleComponent,

  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    HttpClientModule,
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class SampleModule { }
