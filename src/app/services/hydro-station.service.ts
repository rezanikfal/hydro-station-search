import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface stationResponse {
  items: {
    label: string;
    riverName: string;
    lat: number;
    long: number;
    wiskiID: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class HydroStationService {
  constructor(private http: HttpClient) {}
  stationList(searchTerm: string) {
    return this.http.get<stationResponse>(
      'https://environment.data.gov.uk/hydrology/id/stations.json',
      {
        params: {
          search: searchTerm,
        },
      }
    );
  }
}
