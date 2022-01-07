import { Injectable } from '@angular/core';
import { FlightPath } from '../model/flightpath.model';
import { Location } from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  locationList: any[] = [];
  flightPath: any[] = [];

  constructor() { }

  addLocation (data: Location) {
    this.locationList.push(data);
  }

  clearLocationList () {
    this.locationList = [];
  }

  getLocationList() {
    return this.locationList;
  }

  addCoordinatesInFlightPath (data: FlightPath) {
    this.flightPath.push(data);
  }

  getFlightPath() {
    return this.flightPath;
  }

  clearFlightPath () {
    this.flightPath = [];
  }
}
