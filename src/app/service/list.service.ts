import { Injectable } from '@angular/core';
import { FlightPath } from '../model/flightpath.model';
import { Location } from '../model/location.model';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  locationList: any[] = [];
  flightPath: any[] = [];
  apiKey: Observable<any> = null;

  constructor(private http: HttpClient) { }

  getApiKey() {
    this.apiKey = this.http.get('/env');
    return this.apiKey;
  }

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
