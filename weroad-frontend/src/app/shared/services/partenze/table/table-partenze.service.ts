import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../../environments/environmets';
import { Observable } from 'rxjs';

const Trip_API = environments.apiUrl + '/filter/';


@Injectable({
  providedIn: 'root'
})
export class TablePartenzeService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getPartenze(month: number, year: number): Observable<any> {
    return this.http.get(`${Trip_API}getTripsByMonth?month=${month}&year=${year}`);
  }

}
