import { Component, OnInit } from '@angular/core';
import { BaseMapService } from '../services/base-map.service';
import * as L from 'Leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(private baseMap: BaseMapService) {}
  mainMap: L.Map;

  ngOnInit(): void {
    this.mainMap = this.baseMap.leafletBaseMap('map', -3, 54, 6);
    this.baseMap.googleBaseMap('USHydro', 'm').addTo(this.mainMap);
    L.control.scale().addTo(this.mainMap).setPosition('bottomright');
  }
}
