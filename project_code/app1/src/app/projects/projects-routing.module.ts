import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from '../sample/sample.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  {
    path:'user',component:SampleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
