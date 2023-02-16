import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { PageTitleComponent } from './page-title/page-title.component';
import { StickyLeftCardComponent } from './sticky-left-card/sticky-left-card.component';
import { InfoCardComponent } from './cards/info-card/info-card.component';


@NgModule({
  declarations: [
    PageTitleComponent,
    StickyLeftCardComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule,
    PageTitleComponent,
    StickyLeftCardComponent,
    InfoCardComponent
  ]
})
export class SharedModule { }
