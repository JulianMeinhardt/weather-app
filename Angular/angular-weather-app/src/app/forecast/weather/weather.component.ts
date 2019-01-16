import { Component, Input } from '@angular/core';
import Weather from './weather';

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {

  constructor() {
  }

  @Input()
  set weather(data: any) {
    this.weather = new Weather(data);
  }

}
