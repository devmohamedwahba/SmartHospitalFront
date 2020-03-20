import { AdminService } from "./../../services/admin.service";
import { Router } from "@angular/router";
import { TokenServiceService } from "./../../services/token-service.service";
import { LoginService } from "./../../services/login.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    username: null,
    password: null,
    role_id: null
  };
  public roles: [{
    id:number,
    name:string
  }];

  public error: null;
  public success: null;


  constructor(
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.roles = [{id:null,name:null}]
    this.getRoles();
  }

  onSubmit() {
    this.adminService.createUser(this.form).subscribe(
      data => {
        this.handelSuccess(data)
        this.router.navigate(["/admin/users"]);
      },
      error => {
        this.handelError(error);
      }
    );
  }

  handelError(error) {
    this.error = error.error.message;
  }
     handelSuccess(succ) {
    this.success = succ.message;
  }
  getRoles() {
    this.adminService.getAllRoles().subscribe(
      data => {  
          data.forEach((element)=>{
               this.roles.push(element);
          })
      },
      error => {
        console.log(error);
      }
    );
  }
}
