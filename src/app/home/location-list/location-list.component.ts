import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(private listService: ListService) { }

  list: any[] = [];

  ngOnInit(): void {
    this.getLocationList();
  }

  getLocationList() {
    this.list = this.listService.getLocationList();
  }

}
