import { Component, Input } from '@angular/core';
import Weather from './weather';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {

  private _weather: Weather;
  constructor() {
  }

  @Input()
  set weatherData(data: any) {
    this._weather = new Weather(data);
  }

}
