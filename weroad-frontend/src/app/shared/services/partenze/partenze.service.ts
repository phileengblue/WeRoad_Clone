// partenza.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../environments/environmets';
import { Observable } from 'rxjs';

const Trip_API = environments.apiUrl + '/month';

@Injectable({
  providedIn: 'root',
})
export class PartenzeService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getPartenze(id: number): Observable<any> {
    return this.http.get(`${Trip_API}/${id}/show`);
  }
}
