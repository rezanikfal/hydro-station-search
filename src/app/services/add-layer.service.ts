import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import '../../assets/images/marker-shadow.png'; //Leaflet bug

@Injectable({
  providedIn: 'root',
})
export class AddLayerService {
  constructor() {}

  addPointToLayerGroup(
    layerGroup: L.LayerGroup,
    lat: number,
    long: number,
    statioName: string,
    otherInfo: string
  ) {
    layerGroup.addLayer(
      L.marker([lat, long])
        .bindTooltip(
          `<table>
      <tr style="border-bottom: 1px solid black">
         <td colspan=2 style="font-weight: bold">Station Info</td>
      </tr>
      <tr>
         <td style="color: gray; padding-top: 3px">Station Name:&nbsp</td>
         <td>StationName</td>
      </tr>
      <tr>
      <td style="color: gray">Other:&nbsp</td>
      <td>OTHER</td>
      </tr>
      </table>
      `,
          { direction: 'auto', permanent: true }
        )
        .openTooltip()
    );
  }
}
