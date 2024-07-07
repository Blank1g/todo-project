import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { LocalStorageService } from '../local/local-storage.service';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `${environment.API_URL}/auth`;

  private localStorageService = inject(LocalStorageService);
  private http = inject(HttpClient);

  constructor() { }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.url}/login`, { email, password })
      .pipe(
        map((response: LoginResponse) => {
          this.localStorageService.setItem('access_token', response.token);
          return response;
        })
      );
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.url}/signup`, { name, email, password })
  }
}
