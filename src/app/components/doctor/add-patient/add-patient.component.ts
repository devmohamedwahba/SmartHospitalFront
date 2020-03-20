import { Patient } from './../../../interfaces/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  public form = {
    name: null,
    national_id: null,
    nationality:null,
    mobile:null,
    age:null,
    diagnostic:null
  }
  public error;
  public success;
  public isSubmit = false;
  public user: Patient;

  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private doctorService: DoctorService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.doctorService.addPatient(this.form).subscribe(
      data => {
        
        this.handelSuccess(data)

        this.doctorService.searchByNationalId(this.form).subscribe(
          data => {
            this.isSubmit = true;
            this.user = data
          },
          error => {
            this.handelError(error)
          }
        )

        // this.router.navigate([`/doctor/searchNationalId`]);
       },
      error => { this.handelError(error) }
    )
  }

  handelError(error) {
    this.error = error.error.message;
  }
  handelSuccess(succ) {
    this.success = succ.message;
  }

  addRecipe(user){
    console.log(user)
       this.router.navigate([`/doctor/add-recipe/${user.id}`]);
  }


}
