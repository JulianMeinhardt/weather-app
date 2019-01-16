export default class Weather {
  private timestamp: Date;

  constructor(data: any) {
    this.timestamp = data.dt;
  }
}