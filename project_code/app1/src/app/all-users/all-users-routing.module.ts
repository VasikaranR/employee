import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from '../sample/sample.component';
import { AllUsersComponent } from './all-users.component';

const routes: Routes = [
  {path:'',component:AllUsersComponent},
  {
    path:'user',component:SampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllUsersRoutingModule { }
