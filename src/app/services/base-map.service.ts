import { Injectable } from '@angular/core';
import * as L from 'Leaflet';

@Injectable({
  providedIn: 'root',
})
export class BaseMapService {
  constructor() {}

  googleBaseMap(
    companyInfo: string,
    lyrs: string, //Hybrid: s,h Satellite: s Streets: m Terrain: p
    maxZoom: number = 23,
    maxNativeZoom: number = 20,
    attribution: string = 'Map data &copy; ' +
      new Date().getFullYear() +
      ' Google, INEGI &nbsp' +
      '<a href="https://www.google.com/intl/en_us/help/terms_maps.html">Terms</a> &nbsp'
  ): L.TileLayer {
    let map = L.tileLayer(
      `https://{s}.google.com/vt/lyrs=${lyrs}&x={x}&y={y}&z={z}`,
      {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: attribution + companyInfo,
        maxNativeZoom,
        maxZoom,
      }
    );
    return map;
  }

  leafletBaseMap(
    divContainer: string,
    MapCenterX: number,
    MapCenterY: number,
    zoomLevel: number
  ): L.Map {
    return L.map(divContainer, {
      center: [MapCenterY, MapCenterX],
      zoom: zoomLevel,
      zoomControl: false,
    });
  }
}
