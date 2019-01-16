import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

@Injectable()
export class WeatherComponent {
  private data: Object;
  constructor(data) {
    this.data = data;
  }
}
