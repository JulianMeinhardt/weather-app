export default class Forecast {
  daysOfForecast: number;
  city: string;
  zip: string;
  data: any[];

  constructor(response: any) {
    this.daysOfForecast = 5;
    this.city = '00000';
    this.data = [...response.list]
  }

}