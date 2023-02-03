import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { PageTitleComponent } from './page-title/page-title.component';


@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule,
    PageTitleComponent
  ]
})
export class SharedModule { }
