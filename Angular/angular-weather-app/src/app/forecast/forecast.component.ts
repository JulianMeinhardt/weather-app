import { Component, OnInit, Injectable } from '@angular/core';
import APIService from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

@Injectable()
export class ForecastComponent implements OnInit {

  constructor(private apiService: APIService) {
  }

  async getWeatherInformationByZIP(zip: string) {
    await this.apiService.getWeatherDataForZip(zip);
  }

  ngOnInit() {
    this.getWeatherInformationByZIP('64521');
  }
}
