import { Component, OnInit } from '@angular/core';
import { FlightPath } from 'src/app/model/flightpath.model';
import { Location } from 'src/app/model/location.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
