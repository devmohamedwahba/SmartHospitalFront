import { Patient } from "./../../../interfaces/patient";
import { DoctorService } from "src/app/services/doctor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Drug } from "src/app/interfaces/drug";
import { DrugDoctor } from "src/app/interfaces/drug-doctor";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {
  private param;
  public form = {
    id: null
  };
  public isSubmit = false;
  public user: Patient;

  public drugs: DrugDoctor[];
  public filteredDrugs: DrugDoctor[];
  public error: null;
  public success: null;
  public loaded = false;
  public validate = null;

  public drugForm = {
    dose: null,
    rotes: null,
    unit: null,
    duration: null,
    drug_id: null,
    drug_name: null
  };
  public recipeForm = {
    title: null,
    end_date: null,
    notes: null,
    dept_id: null
  };
  public drugInRecipe = [];
  public departments = [];
  public recipe = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.form.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.showUser();
    this.getDrugsOfDoctor();
    // this.getdepartments()
  }

  showUser() {
    this.doctorService.searchById(this.form).subscribe(
      data => {
        this.isSubmit = true;
        this.user = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getDrugsOfDoctor() {
    this.doctorService.doctorDrug().subscribe(
      data => {
        this.drugs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getdepartments() {
    this.doctorService.getDepartments().subscribe(
      data => {
        this.departments = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.doctorService.getDrugName(this.drugForm.drug_name).subscribe(
      data => {
        this.drugForm.drug_id = data["id"];
        const obj = JSON.parse(JSON.stringify(this.drugForm));
        this.drugInRecipe.push(obj);
        this.loaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmitRecipe() {
    let duarationArray = [];
    this.drugInRecipe.forEach(element => {
      duarationArray.push(element["duration"]);
    });
    let maxDrugDuration = Math.max(...duarationArray);
    function addDays(theDate, days) {
      return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }
    var newDate = addDays(new Date(), maxDrugDuration);
    

    let recipe = {
      title: this.recipeForm.title,
      end_date: newDate,
      notes: this.recipeForm.notes,
      patient_id: this.form.id,
      drugs: this.drugInRecipe
    };
    console.log(recipe);

    this.doctorService.addRecipe(recipe).subscribe(
      data => {
        this.handelSuccess(data);
        this.router.navigate(["/doctor"]);

        console.log(data);
      },
      error => {
        this.handelError(error);
        console.log(error);
      }
    );
  }

  onKeyUp(e) {
    this.filteredDrugs = this.drugs.filter(function(obj: object) {
      if (obj["name"].startsWith(e.target.value)) {
        return obj;
      }
    });
  }

  handelError(error) {
    this.error = error.error.message;
  }

  handelSuccess(succ) {
    this.success = succ.message;
  }
}
