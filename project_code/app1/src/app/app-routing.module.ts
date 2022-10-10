import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard} from '../../../authservice/auth-guard.service';


const routes: Routes = [
  { path: 'user', 
  loadChildren: () => 
  import('./sample/sample.module').then(m => m.SampleModule),
  canActivate: [AuthGuard] 
   },
  { path: 'projects', 
  loadChildren: () => 
  import('./projects/projects.module').then(m => m.ProjectsModule),
  canActivate: [AuthGuard] 
  },
  { path: 'allUsers', 
  loadChildren: () => 
  import('./all-users/all-users.module').then(m => m.AllUsersModule),
  canActivate: [AuthGuard]  
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
