import { Login } from './../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private url = "http://127.0.0.1:5000";
  private signupUrl = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) {}

  login(loginForm) {
    return this.http.post<Login>(`${this.url}/login`, loginForm);
  }

  signup(signupForm) {
    return this.http.post(`${this.url}/register`, signupForm);
  }
}
