import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class APIService {
  private APIKEY: string = 'fd8afcaaa6e3a0ed5060ca970c2c268b';
  private API_ENDPOINT: string = 'http://api.openweathermap.org/data/2.5/forecast'
  constructor(private http: HttpClient) {

  }

  getWeatherDataForZip(zip: string): Observable<string> {
    // TODO: Check for valid zip
    const url = `${this.API_ENDPOINT}?zip=${zip},de&appId=${this.APIKEY}`;
    const data = this.http.get<string>(url);
    return data;
  }
}