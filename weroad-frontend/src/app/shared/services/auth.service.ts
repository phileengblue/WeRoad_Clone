import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environments } from 'src/environments/environmets';

const AUTH_API = environments.apiUrl + '/auth/';
const SIGNUP_API = `${environments.apiUrl}/user/`;

export interface LogIn {
  email: string;
  password: string;
}

export interface SignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  gender: string;
  birth_date: Date;
  phone_number: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  isLoggedIn: any;

  
  login(user: LogIn): Observable<LogIn> {
    return this.http.post<LogIn>(`${AUTH_API}login`, user).pipe(
      tap((response: any) => {
        this.setToken(response.token.original.access_token);   
        this.setUserImage(response.user.image);                
      })
    );
  }

 
  signup(signup: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>(`${SIGNUP_API}userRegistration`, signup);
  }

  
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }


  getToken(): string | null {
    return localStorage.getItem('authToken');
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }


  setUserImage(imageUrl: string): void {
    localStorage.setItem('userImage', imageUrl);
  }

 
  getUserImage(): string | null {
    return localStorage.getItem('userImage');
  }

  
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userImage');
  }

  constructor() {}
}
