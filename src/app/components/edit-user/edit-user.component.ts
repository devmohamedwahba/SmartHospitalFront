import { User } from 'src/app/interfaces/user';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public form = {
    email: null,
    username: null,
    password: null,
    role_id: null
  };
  public roles: [{
    id: number,
    name: string
  }];

  public error: null;
  public success: null;
  private param;


  constructor(
    private router: Router,
    private adminService: AdminService,
    private route: ActivatedRoute,

  ) { 
    this.param = this.route.snapshot.params['id'];

  }

  ngOnInit() {
    this.roles = [{ id: null, name: null }]
    this.getRoles();
    this.getUserInformation()
  }

  getUserInformation() {
    this.adminService.findUserDetails(this.param).subscribe(
      (data:any) => {
        this.form = data
      },
      (error) => {
        console.log(error)
      }
    )
  }


  onSubmit() {
    this.adminService.updateUser({id:this.param,form:this.form}).subscribe(
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
        data.forEach((element) => {
          this.roles.push(element);
        })
      },
      error => {
        console.log(error);
      }
    );
  }
}
