import { Router } from '@angular/router';
import { Patient } from './../../../interfaces/patient';
import { DoctorService } from './../../../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-search',
  templateUrl: './pharmacy-search.component.html',
  styleUrls: ['./pharmacy-search.component.css']
})
export class PharmacySearchComponent implements OnInit {
  public form = {
    id: null,
  }
  public isSubmit = false;
  public user: Patient;
  public error;

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.doctorService.searchById(this.form).subscribe(
      data => {
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
