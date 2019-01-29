import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class LocationService {

  private REVERSE_GEOCODING_URL: String = 'https://eu1.locationiq.com/v1/reverse.php?';
  private API_TOKEN: String = 'cea04d7eb052b6';
  private zip: String = '00000';
  private geolocation: any;
  constructor(private http: HttpClient) {

  }

  getCurrentLocation = () => {
    // Check if browser supports and allows geo location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successGetLatAndLong);
    } else {
      return null;
    }
  }

  successGetLatAndLong = (position) => {
    this.geolocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
  }

  getZIPByGeolocation(): Observable<string> {
    if (this.geolocation != null) {
      const searchQuery = `key=${this.API_TOKEN}&lat=${this.geolocation.latitude}&lon=${this.geolocation.longitude}&format=json`;
      const response = this.http.get<string>(this.REVERSE_GEOCODING_URL + searchQuery);

      return response;
    }
    return null;
  }

}
