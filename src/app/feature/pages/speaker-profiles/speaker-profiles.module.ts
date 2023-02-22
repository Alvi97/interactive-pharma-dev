import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SpeakerProfilesComponent } from './speaker-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakerProfilesComponent
  }
];

@NgModule({
  declarations: [
    SpeakerProfilesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SpeakerProfilesModule { }