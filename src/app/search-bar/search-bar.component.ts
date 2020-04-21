import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HydroStationService } from '../services/hydro-station.service';
import { GISService } from '../services/GIS.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(
    private hydroStation: HydroStationService,
    private GeoService: GISService
  ) {}
  @Input() hydroStationMarker: L.LayerGroup;
  @Input() mainMap: L.Map;

  myControl = new FormControl();
  options: string[] = [];

  onChangeSearchItem(e: any): void {
    if (!e.target.value) {
      this.options = [];
      this.GeoService.clearLayerGroup(this.hydroStationMarker);
    } else {
      this.hydroStation.stationList(e.target.value).subscribe((response) => {
        this.options = response.items.map((station) => station.label);
      });
    }
  }
  onSelectItem(e: any): void {
    this.options = [];
    this.hydroStation.stationList(e.source.value).subscribe((response) => {
      this.GeoService.clearLayerGroup(this.hydroStationMarker);
      this.GeoService.addPointToLayerGroup(
        this.hydroStationMarker,
        response.items[0].lat,
        response.items[0].long,
        response.items[0].label,
        response.items[0].riverName,
        response.items[0].wiskiID
      );
      this.GeoService.setMapView(
        this.mainMap,
        response.items[0].long,
        response.items[0].lat,
        this.mainMap.getZoom()
      );
    });
  }

  resetForm(): void {
    this.myControl.reset();
    this.GeoService.clearLayerGroup(this.hydroStationMarker);
    this.options = [];
    this.GeoService.setMapView(this.mainMap, -3, 54.4, 6);
  }
}
