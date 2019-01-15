import { Component, OnInit, Injectable } from '@angular/core';
import APIService from '../services/api.service';
import Forecast from './forecast';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

@Injectable()
export class ForecastComponent implements OnInit {

  forecast: Forecast;
  constructor(private apiService: APIService) {
  }

  getWeatherInformationByZIP(zip: string) {
    this.apiService.getWeatherDataForZip(zip).subscribe((data: Forecast) => {
    });
  }

  ngOnInit() {
    this.getWeatherInformationByZIP('64521');
  }
}
