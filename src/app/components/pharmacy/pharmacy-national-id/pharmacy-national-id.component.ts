import { Router } from '@angular/router';
import { Patient } from './../../../interfaces/patient';
import { DoctorService } from './../../../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-national-id',
  templateUrl: './pharmacy-national-id.component.html',
  styleUrls: ['./pharmacy-national-id.component.css']
})
export class PharmacyNationalIdComponent implements OnInit {

  public form = {
    national_id: null,
  }
  public isSubmit = false;
  public user: Patient;
  public error;

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.doctorService.searchByNationalId(this.form).subscribe(
      data => {
        console.log(data)
        this.isSubmit = true;
        this.user = data
      },
      error => {
        console.log(error)
        this.handelError(error)
      }
    )
  }
  showRecipe(e) {
    this.doctorService.showRecipe(e).subscribe(
      (data) => {
        this.router.navigate([`/pharmacy/recipe/${e}`]);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  handelError(error) {
    this.error = error.error.message;
  }
}
