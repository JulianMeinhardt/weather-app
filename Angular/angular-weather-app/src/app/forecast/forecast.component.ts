import { Component, OnInit, Injectable } from '@angular/core';
import APIService from '../services/api.service';
import LocationService from '../services/location.service';
import Forecast from './forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

@Injectable()
export class ForecastComponent implements OnInit {

  forecast: Forecast;
  constructor(private apiService: APIService, private locationService: LocationService) {
  }

  getWeatherInformationByZIP(zip: string) {
    this.apiService.getWeatherDataForZip(zip).subscribe((data: string) => {
      this.forecast = new Forecast(data);
    });
  }

  ngOnInit() {
    this.locationService.getZIPByGeolocation().then ((result) =>{
      this.getWeatherInformationByZIP(result);
    });
  }
}
