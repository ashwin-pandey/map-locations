import { Component, OnInit } from '@angular/core';
import { FlightPath } from 'src/app/model/flightpath.model';
import { Location } from 'src/app/model/location.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude: any;
  longitude: any;
  zoom: any = 5;

  list: any = [];
  flightPath: any = [];

  constructor(private listService: ListService) { 

    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.longitude = +pos.coords.longitude;
        this.latitude = +pos.coords.latitude;
        this.listService.addLocation(new Location("Current Location", this.latitude, this.longitude));
        this.listService.addCoordinatesInFlightPath(new FlightPath(this.latitude, this.longitude));
      });
    }
  }

  ngOnInit(): void {
    this.list = this.listService.getLocationList();
    this.flightPath = this.listService.getFlightPath();
  }
}
