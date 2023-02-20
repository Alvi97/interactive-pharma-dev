import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in.component';


const routes: Routes = [
  {
    path: '', 
    component: LogInComponent,
  }
];

@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
