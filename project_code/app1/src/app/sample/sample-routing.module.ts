import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample.component';
import { AuthGuardService as AuthGuard } from '../../../../authservice/auth-guard.service';

const routes: Routes = [
  { path: '', component: SampleComponent,
    canActivate:[AuthGuard]
  },
   
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
