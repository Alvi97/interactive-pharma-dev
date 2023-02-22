import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { PageTitleComponent } from './page-title/page-title.component';
import { StickyLeftCardComponent } from './sticky-left-card/sticky-left-card.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';




@NgModule({
  declarations: [
    PageTitleComponent,
    StickyLeftCardComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatOptionModule,
    
  ],
  exports:[
    HttpClientModule,
    PageTitleComponent,
    StickyLeftCardComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    

    ]
})
export class SharedModule { }
