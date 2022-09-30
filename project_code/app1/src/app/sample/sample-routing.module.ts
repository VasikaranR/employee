import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from '../all-users/all-users.component';
import { SampleComponent } from './sample.component';

const routes: Routes = [
  { path: '', component: SampleComponent },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
