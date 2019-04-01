import { GeoCoordinates } from './geocoordinates';

export class LocationData {
    coords: GeoCoordinates;

    constructor(position){
        this.coords = new GeoCoordinates(position.coords.longitude, position.coords.latitude)
    }

}