import { PharmacyService } from "./../../../services/pharmacy.service";
import { DrugDoctor } from "./../../../interfaces/drug-doctor";
import { DoctorService } from "./../../../services/doctor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Drug } from "src/app/interfaces/drug";

@Component({
  selector: "app-pharmacy-recipe",
  templateUrl: "./pharmacy-recipe.component.html",
  styleUrls: ["./pharmacy-recipe.component.css"]
})
export class PharmacyRecipeComponent implements OnInit {
  private param;
  private recipe;
  public loaded = false;
  public drugs;
  drugsDetails = [];
  public error;
  public stockDrugs: [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private pharmacyService: PharmacyService
  ) {
    this.param = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.getRecipe();
  }
  getRecipe() {
    this.doctorService.showRecipe(this.param).subscribe(
      data => {
        this.recipe = data;
        this.drugs = data.drugs;
        this.loaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  spendRecipe(recipeId) {
    let recipe = {
      recipe_id: recipeId,
      drugs: this.drugs
    };
    this.pharmacyService.spendRecipe(recipe).subscribe(
      data => {
        console.log(data);

        this.drugsDetails = data["data"];
      },
      error => {
        this.handelError(error);
        console.log(error);
      }
    );
  }

  handelError(error) {
    this.error = error.error.message;
    this.stockDrugs = error.error.drug
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
}
