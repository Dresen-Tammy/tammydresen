import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';

const projectRoutes: Routes = [
  {
    path: '', 
    children: [
      {
        'path': '', component: ProjectComponent
      }
    ]
  } 
]
@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectModule { }
