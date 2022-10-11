import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'project_code/authservice/auth-guard.service';
const routes: Routes = [
 
  {
    path: 'user',
    loadChildren: () =>
    loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:8001/remoteEntry.js',
    exposedModule: './Module',
    }).then((m) => m.SampleModule),
    canActivate:[AuthGuard]
    },
    {
      path: 'sample1',
      loadChildren: () =>
      loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8002/remoteEntry.js',
      exposedModule: './Module',
      }).then((m) => m.Sample1Module),

      },
      {
        path: 'projects',
        loadChildren: () =>
        loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8001/remoteEntry.js',
        exposedModule: '.ProjectsModule',
        }).then((m) => m.ProjectsModule),
        canActivate:[AuthGuard]

  
      },
      {
        path:'allUsers',
        loadChildren:()=>
        loadRemoteModule({
        type: 'module',
        remoteEntry:'http://localhost:8001/remoteEntry.js',
        exposedModule:'.AllUsersModule'
        }).then((m) =>m.AllUsersModule),
        canActivate:[AuthGuard]

      },

      {
        path: 'profile',
        loadChildren: () =>
        loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8002/remoteEntry.js',
        exposedModule: '.ProfileModule',
        }).then((m) => m.ProfileModule),
        canActivate:[AuthGuard]

        },
      
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
