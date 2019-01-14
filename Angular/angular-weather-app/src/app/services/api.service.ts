import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class APIService {
  APIKEY: string = 'fd8afcaaa6e3a0ed5060ca970c2c268b';
  API_ENDPOINT: string = 'http://api.openweathermap.org/data/2.5/weather'
  constructor(private http: HttpClient) {

  }

  getWeatherDataForZip(zip: string) {
    // TODO: Check for valid zip
    const url = `${this.API_ENDPOINT}?zip=${zip},de&appiId=${this.APIKEY}`;
    return this.http.get(url);
  }
}