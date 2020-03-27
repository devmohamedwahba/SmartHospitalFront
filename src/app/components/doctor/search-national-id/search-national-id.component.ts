import { Patient } from './../../../interfaces/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-national-id',
  templateUrl: './search-national-id.component.html',
  styleUrls: ['./search-national-id.component.css']
})
export class SearchNationalIdComponent implements OnInit {
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
        this.router.navigate([`/doctor/recipe/${e}`]);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  handelError(error) {
    this.error = error.error.message;
  }

  addRecipe(user) {
    console.log(user)
    this.router.navigate([`/doctor/add-recipe/${user.id}`]);
  }


}
