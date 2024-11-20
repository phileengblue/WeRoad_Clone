import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../../environments/environmets';
import { Observable } from 'rxjs';

const Trip_API = environments.apiUrl + '/filter/';

@Injectable({
  providedIn: 'root'
})
export class FilterPartenzeService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getItinerary(itinerary_name: string): Observable<any> {
    return this.http.get(`${Trip_API}filter?itinerary_name=${itinerary_name}`);
  }

  // Aggiunto parametro 'ordering' per gestire l'ordinamento
  getFilter(
    range?: string, 
    max?: number, 
    min?: number, 
    duration_max?: number, 
    duration_min?: number, 
    status?: string, 
    month?: number, 
    year?: number, 
    start_date?: any, 
    end_date?: any, 
    ordering?: string 
  ): Observable<any> {
    let params = [];
  
    if (range) params.push(`range=${range}`);
    if (max !== undefined) params.push(`max=${max}`);
    if (min !== undefined) params.push(`min=${min}`);
    if (duration_max !== undefined) params.push(`durationmax=${duration_max}`);
    if (duration_min !== undefined) params.push(`durationmin=${duration_min}`);
    if (status) params.push(`status=${status}`);
    if (month) params.push(`month=${month}`);
    if (year) params.push(`year=${year}`);
    if (start_date) params.push(`start_date=${start_date}`);
    if (end_date) params.push(`end_date=${end_date}`);
    if (ordering) params.push(`ordering=${ordering}`); 

    const queryString = params.join('&');
    return this.http.get(`${Trip_API}filter?${queryString}`);
  }
}
