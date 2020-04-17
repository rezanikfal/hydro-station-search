import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HydroStationService } from '../services/hydro-station.service';
import { AddLayerService } from '../services/add-layer.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(
    private hydroStation: HydroStationService,
    private addLayer: AddLayerService
  ) {}
  @Input() hydroStationMarker: L.LayerGroup;
  myControl = new FormControl();
  options: string[] = [];

  onChangeSearchItem(e: any) {
    this.hydroStation.stationList(e.target.value).subscribe((response) => {
      console.log(response);

      if (!e.target.value) {
        this.options = [];
      } else {
        this.options = response.items.map(
          (station) => station.label // + station.wiskiID
        );
      }
    });
  }
  onSelectItem(e: any) {
    console.log(e.source.value);
    this.hydroStation.stationList(e.source.value).subscribe((response) => {
      console.log(response);

      this.addLayer.clearLayerGroup(this.hydroStationMarker);
      this.addLayer.addPointToLayerGroup(
        this.hydroStationMarker,
        response.items[0].lat,
        response.items[0].long,
        response.items[0].label,
        response.items[0].riverName,
        response.items[0].wiskiID
      );
    });
  }
}
