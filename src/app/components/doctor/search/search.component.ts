import { Router } from '@angular/router';
import { Patient } from './../../../interfaces/patient';
import { User } from './../../../interfaces/user';
import { DoctorService } from 'src/app/services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public form = {
    id: null,
  }
  public isSubmit = false;
  public user:Patient;
  public error;

  constructor(private doctorService: DoctorService,private router:Router) { }

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
  showRecipe(e){
    this.doctorService.showRecipe(e).subscribe(
      (data)=>{
        this.router.navigate([`/doctor/recipe/${e}`]);
      },
      (error)=>{
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
