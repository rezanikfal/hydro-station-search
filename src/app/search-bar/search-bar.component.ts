import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HydroStationService } from '../services/hydro-station.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private hydroStation: HydroStationService) {}
  ngOnInit(): void {}
  myControl = new FormControl();
  options: string[] = [];
  onChangeSearchItem(e: any) {
    this.hydroStation.stationList(e.target.value).subscribe((e: any) => {
      this.options = e.items.map((station: any) => station.label);
    });
  }
}
