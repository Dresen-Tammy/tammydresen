import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component'
import { Routes, RouterModule } from '@angular/router';

const contactRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContactComponent
      },
    ]
  }
]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  exports: [RouterModule]
})
export class ContactModule { }
