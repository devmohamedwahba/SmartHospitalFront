import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  public users: User[];
  public id: number;
  public success;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers();

  }


  getUsers() {

    this.adminService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteUser(e) {
    this.adminService.deleteUser(e).subscribe(
      data => {
        this.getUsers()
        this.handelSuccess(data)

      },
      error => {
        console.log(error);
      }
    );
    // this.router.navigate(["/"]);
  }

  handelSuccess(succ) {
    this.success = succ.message;
  }
}
