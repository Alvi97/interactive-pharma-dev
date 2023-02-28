import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';


const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  },
   {
      path: 'new-password',
      component: CreateNewPasswordComponent
    }
];
@NgModule({
  declarations: [
    ForgotPasswordComponent,
    CreateNewPasswordComponent
  ],
  imports: [
    CommonModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
  ]
})
export class ChangePasswordModule { }
