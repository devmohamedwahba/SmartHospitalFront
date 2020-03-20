import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/interfaces/drug';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
  public drugs: Drug[];
  public success;

  constructor(private adminService: AdminService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDrugs();

  }

  getDrugs() {

    this.adminService.getAllDrugs().subscribe(
      data => {
        this.drugs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deletedrug(e) {
    this.adminService.deleteDrug(e).subscribe(
      data => {
        this.getDrugs()
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
