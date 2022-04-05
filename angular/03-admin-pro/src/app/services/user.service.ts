// Angular importations
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

// Environmental imports
import { environment } from 'src/environments/environment';

// Models imports
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http
      .get(`${base_url}/login/renew`, {
        headers: {
          'x-token': token,
        },
      })
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp['token']);
        }),
        map((resp: any) => true),
        catchError((error) => of(false))
      );
  }

  createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/users`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp['token']);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp['token']);
      })
    );
  }

  loginGoogle(token: any) {
    return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp['token']);
      })
    );
  }
}
