import { LogoutService } from './../../services/logout.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public loggedIn: Boolean;

  constructor(private Auth: AuthService, private logoutService: LogoutService, private router:Router) {}

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => {
      this.loggedIn = value;
    });
  }

  logout(event){
    event.preventDefault()
    this.logoutService.logout().subscribe(
      data => {
        console.log(data)
        this.router.navigate(["/"]);

      
      }

      );

  }
}
