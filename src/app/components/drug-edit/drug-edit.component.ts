import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/interfaces/drug';

@Component({
  selector: 'app-drug-edit',
  templateUrl: './drug-edit.component.html',
  styleUrls: ['./drug-edit.component.css']
})
export class DrugEditComponent implements OnInit {
  loaded = false;
  private param ;
  public form = {
    name: null,
    quantity: null,
    expire_date: null,
    unit: null,
    role_id: null
  };
  public roles:any[]
  public error: null;
  public success: null;


  constructor(
    private route: ActivatedRoute,
    private adminserv:AdminService,
    private router: Router


  ) { 
    this.param = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getDrugInformation();
    this.getRoles()
  }
  getDrugInformation(){
    this.adminserv.findDrugDetails(this.param).subscribe(
      (data)=>{
        this.form = data
        this.loaded = true
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  getRoles() {
    this.adminserv.getAllRoles().subscribe(
      data => {
        this.roles = data
     
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.adminserv.updateDrug({id:this.param,form:this.form}).subscribe(
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
    console.log(error)
    this.error = error.error.message.role_id;
  }

  handelSuccess(succ) {
    this.success = succ.message;
  }



  

}
