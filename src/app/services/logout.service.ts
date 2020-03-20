import { TokenServiceService } from './token-service.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

    var t = `${localStorage.getItem("token")}`;


  var headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);



@Injectable({
  providedIn: "root"
})
export class LogoutService {
  
  private url = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) {}


  logout() {
    console.log(t);
    return this.http.post(`${this.url}/logout`, { headers: headers_object });
  }
}
