import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import { InfoCardComponent } from './components/cards/info-card/info-card.component';
import { EducationCardComponent } from './components/cards/education-card/education-card.component';
import { DiaryCardComponent } from './components/cards/diary-card/diary-card.component';
import { CommunityCardComponent } from './components/cards/community-card/community-card.component';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
