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
  public users: any;
  public id: number;
  public success;
  filteredArray= [];

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers();

  }

  onSearch(search){
    let input = search.target.value;
    this.filteredArray = this.users.filter(word => word.username.startsWith(input));

  }


  getUsers() {
    
    this.adminService.getAllUsers().subscribe(
      data => {
        this.filteredArray = this.users = data;
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
