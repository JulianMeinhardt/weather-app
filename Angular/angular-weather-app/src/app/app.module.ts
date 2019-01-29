import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherComponent } from './forecast/weather/weather.component';
import APIService from '../app/services/api.service'
import LocationService from '../app/services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    APIService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
