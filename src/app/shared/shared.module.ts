import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { PageTitleComponent } from './page-title/page-title.component';
import { StickyLeftCardComponent } from './sticky-left-card/sticky-left-card.component';
import { InfoCardComponent } from './cards/info-card/info-card.component';
import { EducationCardComponent } from './cards/education-card/education-card.component';
import { DiaryCardComponent } from './cards/diary-card/diary-card.component';
import { CommunityCardComponent } from './cards/community-card/community-card.component';


@NgModule({
  declarations: [
    PageTitleComponent,
    StickyLeftCardComponent,
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
    PageTitleComponent,
    StickyLeftCardComponent,
    InfoCardComponent,
    EducationCardComponent,
    DiaryCardComponent,
    CommunityCardComponent
    ]
})
export class SharedModule { }
