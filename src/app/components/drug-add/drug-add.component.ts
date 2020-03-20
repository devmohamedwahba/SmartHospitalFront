import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: "app-drug-add",
  templateUrl: "./drug-add.component.html",
  styleUrls: ["./drug-add.component.css"]
})
export class DrugAddComponent implements OnInit {
  public form = {
    name: null,
    quantity: null,
    expire_date: null,
    unit: null,
    role_id: null
  };
  public roles: [
    {
      id: number;
      name: string;
    }
  ];

  public error: null;
  public success:null;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {
    this.roles = [{ id: null, name: null }];
    this.getRoles();
  }

  onSubmit() {
    this.adminService.createDrug(this.form).subscribe(
      data => {
            this.handelSuccess(data)

        this.router.navigate(["/admin/drugs"]);


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
        data.forEach(element => {
          this.roles.push(element);
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
