import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sample',
    loadChildren: () => import('app1/Module').then(m => m.SampleModule)
  },
  {
    path:'sample1',
    loadChildren: () => import('app2/Module').then(m => m.Sample1Module)
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
