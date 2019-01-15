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

  async getWeatherInformationByZIP(zip: string) {
    this.forecast = await this.apiService.getWeatherDataForZip(zip);
  }

  ngOnInit() {
    this.getWeatherInformationByZIP('64521');
  }
}
