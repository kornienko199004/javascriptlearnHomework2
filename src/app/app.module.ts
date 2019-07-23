import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SocialCardComponent } from './social-card/social-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    WeatherCardComponent,
    SocialCardComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
