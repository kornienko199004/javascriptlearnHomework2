import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SocialCardComponent } from './social-card/social-card.component';
import { FilterPipe } from './shared/filter.pipe';
import { PhonePipe } from './shared/phone.pipe';
import { HotelsService } from './hotels.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL_TOKEN, BASE_URL } from './config';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    WeatherCardComponent,
    SocialCardComponent,
    FilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [
    HotelsService,
    { provide: BASE_URL_TOKEN, useValue: BASE_URL },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
