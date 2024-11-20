import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';

const Trip_API = environments.apiUrl + '/trip';

@Injectable({
  providedIn: 'root'
})

export class ShoDetailsService {

  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getShow(id: number): Observable<any> {
    return this.http.get(`${Trip_API}/${id}/show`);
  }
}
