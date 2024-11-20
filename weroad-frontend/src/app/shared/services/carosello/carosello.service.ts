import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../environments/environmets';
import { Observable } from 'rxjs';

const Trip_API= environments.apiUrl + '/trip/';
const Review_API = environments.apiUrl + '/user/';


@Injectable({
  providedIn: 'root'
})

export class CaroselloService {
  private http:HttpClient= inject (HttpClient);

  constructor() { }
  getTrip(): Observable<any>{
    return this.http.get(Trip_API + "index")
  }

  getRating(id: number): Observable<any> {
    return this.http.get<any>(`${Review_API}${id}/getReview`);
  }
}


