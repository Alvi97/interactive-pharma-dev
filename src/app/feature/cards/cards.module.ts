import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { InfoCardComponent } from './info-card/info-card.component';
import { CommunityCardComponent } from './community-card/community-card.component';
import { DiaryCardComponent } from './diary-card/diary-card.component';
import { EducationCardComponent } from './education-card/education-card.component';



@NgModule({
  declarations: [
    InfoCardComponent,
    EducationCardComponent,
    DiaryCardComponent,
    CommunityCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule,
    InfoCardComponent,
    EducationCardComponent,
    DiaryCardComponent,
    CommunityCardComponent
    ]
})
export class CardsModule { }
