import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileScreenComponent } from './profile-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path:'',
    data:{
      pageTitle:'Complete Profile'
    },
    component: ProfileScreenComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectCountryModule.forRoot('de'),
    RouterModule.forChild(routes),

  ],
  exports:[]

})
export class ProfileScreenModule { }
