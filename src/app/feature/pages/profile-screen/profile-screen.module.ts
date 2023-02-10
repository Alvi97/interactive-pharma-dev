import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileScreenComponent } from './profile-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path:'',
    data:{
      pageTitle:'complete-profile'
    },
    component: ProfileScreenComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  
    RouterModule.forChild(routes),

  ],
  exports:[]

})
export class ProfileScreenModule { }
