import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationData } from './locationdata';
import { GeoCoordinates } from './geocoordinates';

@Injectable()
export default class LocationService {

  private REVERSE_GEOCODING_URL: String = 'https://eu1.locationiq.com/v1/reverse.php?';
  private API_TOKEN: String = 'cea04d7eb052b6';
  private zip: String = '00000';
  private geolocation: GeoCoordinates;
  constructor(private http: HttpClient) {

  }
  
  private getCoordinates() {
    return new Promise<LocationData>(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve((new LocationData(position)))
      });
    });
  }

  private async reverseGeoCode (){
  if (this.geolocation != null) {
    const searchQuery = `key=${this.API_TOKEN}&lat=${this.geolocation.latitude}&lon=${this.geolocation.longitude}&format=json`;
    const response = await this.http.get<any>(this.REVERSE_GEOCODING_URL + searchQuery).toPromise();
    console.log('response', response);
    return response; 
  }
  }


  async getZIPByGeolocation() {
    // Check if browser supports and allows geo location
    if (navigator.geolocation) {
      const position = await this.getCoordinates();
      this.geolocation = position.coords;
      const geocodes = await this.reverseGeoCode();


      // Actually return a value
      return geocodes.address.postcode;
   }
  }

}
