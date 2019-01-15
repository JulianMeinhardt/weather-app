export default class Forecast {
  daysOfForecast: number;
  city: string;
  zip: string;
  data: object;

  constructor(json: string) {
    const response = JSON.parse(json);
    this.daysOfForecast = 5;
    this.city = '00000';
    this.data = response;
  }
}