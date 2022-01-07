import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlightPath } from 'src/app/model/flightpath.model';
import { Location } from 'src/app/model/location.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  locationForm: FormGroup = new FormGroup({
    location: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });

  constructor(private listService: ListService) { 
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    let value: Location = this.locationForm.value;
    this.listService.addLocation(value);
    this.listService.addCoordinatesInFlightPath(new FlightPath(+this.locationForm.value.latitude, +this.locationForm.value.longitude));
    this.resetForm();
  }

  resetForm(){
    this.locationForm.reset({location: '', latitude: '', longitude: ''});
  }

}
