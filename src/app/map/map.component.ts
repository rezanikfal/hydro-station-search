import { Component, OnInit } from '@angular/core';
import { BaseMapService } from '../services/base-map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(private baseMap: BaseMapService) {}
  mainMap: L.Map;
  hydroStationMarker = new L.LayerGroup();

  ngOnInit(): void {
    this.mainMap = this.baseMap.leafletBaseMap('map', -3, 54.4, 6);
    this.baseMap.googleBaseMap('UKHydro', 'm').addTo(this.mainMap);
    L.control.scale().addTo(this.mainMap).setPosition('bottomright');
    this.hydroStationMarker.addTo(this.mainMap);
  }
}
