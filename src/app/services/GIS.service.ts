import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import '../../assets/images/marker-shadow.png'; //Leaflet bug

@Injectable({
  providedIn: 'root',
})
export class GISService {
  constructor() {}

  addPointToLayerGroup(
    layerGroup: L.LayerGroup,
    lat: number,
    long: number,
    statioName: string,
    riverName: string,
    stationReference: string
  ) {
    layerGroup.addLayer(
      L.marker([lat, long])
        .bindTooltip(
          `
          <table style="border: 1px solid black; border-collapse: collapse;  border-spacing: 15px;">
          <tr>
             <th colspan=2 style="border: 1px solid black; background-color: #dcdcdc">Station Info</th>
          </tr>
          <tr>
             <td style="color: gray; padding: 3px">Station Name:&nbsp</td>
             <td style="padding: 3px">${statioName}</td>
          </tr>
          <tr>
             <td style="color: gray; padding: 3px">River Name:&nbsp</td>
             <td style="padding: 3px">${riverName}</td>
          </tr>
          <tr>
          <td style="color: gray; padding: 3px">Station Reference:&nbsp</td>
          <td style="padding: 3px">${stationReference}</td>
       </tr>
       </table>
      `,
          { direction: 'auto', permanent: true, opacity: 1 }
        )
        .openTooltip()
    );
  }

  clearLayerGroup(layerGroup: L.LayerGroup) {
    layerGroup.clearLayers();
  }

  setMapView(
    map: L.Map,
    MapCenterX: number,
    MapCenterY: number,
    zoomLevel: number
  ): void {
    map.setView(new L.LatLng(MapCenterY, MapCenterX), zoomLevel);
  }
}
