import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface stationResponse {
  items: {
    label: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class HydroStationService {
  constructor(private http: HttpClient) {}
  stationList(e: string) {
    return this.http.get<stationResponse>(
      'https://environment.data.gov.uk/hydrology/id/stations.json',
      {
        params: {
          search: e,
        },
      }
    );
  }
}
