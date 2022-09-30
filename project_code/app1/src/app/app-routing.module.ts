import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', 
  loadChildren: () => 
  import('./sample/sample.module').then(m => m.SampleModule)
   },
  { path: 'projects', 
  loadChildren: () => 
  import('./projects/projects.module').then(m => m.ProjectsModule) 
  },
  { path: 'allUsers', 
  loadChildren: () => 
  import('./all-users/all-users.module').then(m => m.AllUsersModule) 
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
