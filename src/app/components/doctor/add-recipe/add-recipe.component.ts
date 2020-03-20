import { Patient } from './../../../interfaces/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/interfaces/drug';
import { DrugDoctor } from 'src/app/interfaces/drug-doctor';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  private param;
  public form = {
    id: null,
  };
  public isSubmit = false;
  public user: Patient;

  public drugs: DrugDoctor[];
  public filteredDrugs:DrugDoctor[];
  public error: null;
  public success: null;
  public loaded = false;

  public drugForm = {
    dose: null,
    rotes: null,
    unit: null,
    duration: null,
    drug_id: null,
    drug_name: null

  }
  public recipeForm = {
    title: null,
    end_date: null,
    notes: null,
    dept_id: null,
  }
  public drugInRecipe = []
  public departments = []
  public recipe = {}


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.form.id = this.route.snapshot.params['id'];

  }

  ngOnInit() {
    this.showUser()
    this.getDrugsOfDoctor()
    this.getdepartments()
  };

  showUser() {
    this.doctorService.searchById(this.form).subscribe(
      data => {
        this.isSubmit = true;
        this.user = data
      },
      error => {
        console.log(error)
      }
    )
  }

  getDrugsOfDoctor() {
    this.doctorService.doctorDrug().subscribe(
      data => {
        this.drugs = data
      },
      error => {
        console.log(error);
      }
    );
  }

  getdepartments() {
    this.doctorService.getDepartments().subscribe(
      data => {
        this.departments = data
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.drugInRecipe.push(this.drugForm)
      this.doctorService.getDrugName(this.drugForm.drug_name).subscribe(
        (data) => {
          console.log(data)
          this.drugForm.drug_id = data['id'];
          this.loaded = true;
        },
        (error) => {
          console.log(error)
        }
      )

      

    console.log(this.drugForm)
  }


  onSubmitRecipe(){
    console.log(this.recipeForm);


    let recipe = {
      title:this.recipeForm.title,
      end_date:this.recipeForm.end_date,
      notes: this.recipeForm.notes,
      dept_id: this.recipeForm.dept_id,
      patient_id:this.form.id,
      drugs:this.drugForm
    }
    this.doctorService.addRecipe(recipe).subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  onKeyUp(e){
    this.filteredDrugs = this.drugs.filter(function (obj:object) { 
       if (obj['name'].startsWith(e.target.value)) {
           return obj
      }
    })
  }


}




