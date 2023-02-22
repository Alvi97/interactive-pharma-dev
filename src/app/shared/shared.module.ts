import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { PageTitleComponent } from './page-title/page-title.component';
import { StickyLeftCardComponent } from './sticky-left-card/sticky-left-card.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    StickyLeftCardComponent,
  
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule,
    PageTitleComponent,
    StickyLeftCardComponent,

    ]
})
export class SharedModule { }
