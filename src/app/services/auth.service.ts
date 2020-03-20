import { TokenServiceService } from './token-service.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedIn = new BehaviorSubject<Boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean)
  {
    this.loggedIn.next(value)
  }


  constructor(private token: TokenServiceService) {}
}
