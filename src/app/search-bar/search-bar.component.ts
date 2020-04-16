import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HydroStationService } from '../services/hydro-station.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(private hydroStation: HydroStationService) {}
  myControl = new FormControl();
  options: string[] = [];

  onChangeSearchItem(e: any) {
    this.hydroStation.stationList(e.target.value).subscribe((response) => {
      if (!e.target.value) {
        this.options = [];
      } else {
        this.options = response.items.map((station) => station.label);
      }
    });
  }
}
