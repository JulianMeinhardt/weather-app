import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Forecast from '../forecast/forecast';
import { Observable } from 'rxjs';

@Injectable()
export default class APIService {
  APIKEY: string = 'fd8afcaaa6e3a0ed5060ca970c2c268b';
  API_ENDPOINT: string = 'http://api.openweathermap.org/data/2.5/weather'
  constructor(private http: HttpClient) {

  }

  async getWeatherDataForZip(zip: string): Forecast {
    // TODO: Check for valid zip
    const url = `${this.API_ENDPOINT}?zip=${zip},de&appiId=${this.APIKEY}`;
    const data = new Forecast(this.http.get(url));
    return await data;
  }
}