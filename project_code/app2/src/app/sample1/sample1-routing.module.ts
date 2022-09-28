import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { Sample1Component } from './sample1.component';

const routes: Routes = [
  
  { path: '', component: Sample1Component },
  { path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample1RoutingModule { }
