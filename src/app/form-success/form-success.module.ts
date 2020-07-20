import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSuccessRoutingModule } from './form-success-routing.module';
import { FormSuccessComponent } from './form-success.component';
import { RouterModule, Routes } from '@angular/router';

const successRoutes: Routes = [
  {
    path: '', 
    component: FormSuccessComponent 
  }
]
  

@NgModule({
  declarations: [FormSuccessComponent],
  imports: [
    CommonModule,
    FormSuccessRoutingModule,
    RouterModule.forChild(successRoutes)
  ]
})
export class FormSuccessModule { }
