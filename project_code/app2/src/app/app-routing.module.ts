import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from 'project_code/app1/src/app/sample/sample.component';
import { AuthGuardService as AuthGuard} from 'project_code/authservice/auth-guard.service';
const routes: Routes = [
  { path: 'sample1',
     loadChildren: () => 
  import('./sample1/sample1.module').then(m => m.Sample1Module)
  },
  {
    path:'user',
    component:SampleComponent,
    canActivate:[AuthGuard]
  },
 
  { path: 'profile',
     loadChildren: () => 
  import('./profile/profile.module').then(m => m.ProfileModule),
  canActivate:[AuthGuard]
  },
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
