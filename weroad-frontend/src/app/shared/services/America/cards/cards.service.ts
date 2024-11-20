import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../../environments/environmets';
import { Observable } from 'rxjs';
 
const filter_API= environments.apiUrl + '/filter/';
const Review_API = environments.apiUrl + '/user/';

// const _API = `${environments.apiUrl}/user/`;
 
 
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private http:HttpClient= inject (HttpClient);
 
  constructor() { }

  getRating(id: number): Observable<any> {
    return this.http.get<any>(`${Review_API}${id}/getReview`);
  }

  getItinerary(itinerary_name: string): Observable<any> {
    return this.http.get(`${filter_API}filter?itinerary_name=${itinerary_name}`);
  }
  
}
