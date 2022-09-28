import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'sample1',
     loadChildren: () => 
  import('./sample1/sample1.module').then(m => m.Sample1Module) 
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
