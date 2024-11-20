import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environmets';
import { Observable } from 'rxjs';

const Trip_API = environments.apiUrl + '/filter/';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getItinerary(itinerary_name: string): Observable<any> {
    return this.http.get(`${Trip_API}filter?itinerary_name=${itinerary_name}`);
  }

  getRange(range: string): Observable<any> {
    return this.http.get(`${Trip_API}filter?range=${range}`);
  }

  getTypes(type_name: string): Observable<any> {
    return this.http.get(`${Trip_API}filter?type_name=${type_name}`);
  }
  getPartenze1(nome: string): Observable<any> {
    return this.http.get(`${Trip_API}filter?period=${nome}`);
  }
  getPartenze(month: number, year: number): Observable<any> {
    return this.http.get(`${Trip_API}getTripsByMonth?month=${month}&year=${year}`);
  }

}
