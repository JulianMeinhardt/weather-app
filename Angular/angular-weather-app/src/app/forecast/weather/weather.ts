import mapWeatherHelper from '../../helper/weatherMapping';

export default class Weather {
  private _timestamp: Date;
  private _icon: string;

  constructor(data: any) {
    this._timestamp = new Date(data.dt_txt);
    this._icon = mapWeatherHelper(data.weather[0].icon);
  }
}