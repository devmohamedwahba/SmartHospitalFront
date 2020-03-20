import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private param;
  private recipe;
  public loaded = false;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private doctorService:DoctorService

    ) {
    this.param = this.route.snapshot.params['id'];
     }

  ngOnInit() {
      this.getRecipe()

  }
  getRecipe(){
    this.doctorService.showRecipe(this.param).subscribe(
      (data)=>{
          this.recipe = data
          this.loaded = true
      },
      (error)=>{
          console.log(error)
      }
    )
  }

}
