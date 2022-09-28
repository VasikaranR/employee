import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'project_code/app2/src/app/profile/profile.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('app1/Module').then(m => m.SampleModule)
  },
  {
    path:'sample1',
    loadChildren: () => import('app2/Module').then(m => m.Sample1Module)
  },
  {
    path:'profile',
    component:ProfileComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
