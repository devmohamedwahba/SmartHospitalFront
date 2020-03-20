import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DrugEditComponent } from './components/drug-edit/drug-edit.component';
import { PharmacyRecipeComponent } from './components/pharmacy/pharmacy-recipe/pharmacy-recipe.component';
import { PharmacyNationalIdComponent } from './components/pharmacy/pharmacy-national-id/pharmacy-national-id.component';
import { PharmacySearchComponent } from './components/pharmacy/pharmacy-search/pharmacy-search.component';
import { PharmacyLayoutComponent } from './components/pharmacy/pharmacy-layout/pharmacy-layout.component';
import { AddRecipeComponent } from './components/doctor/add-recipe/add-recipe.component';
import { AddPatientComponent } from './components/doctor/add-patient/add-patient.component';
import { SearchNationalIdComponent } from './components/doctor/search-national-id/search-national-id.component';
import { SearchComponent } from './components/doctor/search/search.component';
import { DrugAddComponent } from './components/drug-add/drug-add.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DrugsComponent } from './components/drugs/drugs.component';
import { UsersComponent } from './components/users/users.component';
import { DoctorlayoutComponent } from './components/doctor/doctorlayout/doctorlayout.component';
import { RecipeComponent } from './components/doctor/recipe/recipe.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "drug-add",
        component: DrugAddComponent
      },
      {
        path: "drugs",
        component: DrugsComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "user:id",
        component: UsersComponent
      }
      ,
      {
        path: "drugs/edit-drug/:id",
        component: DrugEditComponent
      },
      {
        path: "users/edit-user/:id",
        component: EditUserComponent
      }
    ]
  },
  {
    path: "doctor",
    component: DoctorlayoutComponent,
    children: [
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "searchNationalId",
        component: SearchNationalIdComponent
      },

      {
        path: "recipe/:id",
        component: RecipeComponent
      },
      {
        path: "add-patient",
        component: AddPatientComponent
      },
      {
        path: "add-recipe/:id",
        component: AddRecipeComponent
      }
    ]

  },
  {
    path: "pharmacy",
    component: PharmacyLayoutComponent,
    children: [
      {
        path: "search",
        component: PharmacySearchComponent
      },
      {
        path: "searchNationalId",
        component: PharmacyNationalIdComponent
      },

      {
        path: "recipe/:id",
        component: PharmacyRecipeComponent
      },
      {
        path: "add-patient",
        component: AddPatientComponent
      },
      {
        path: "add-recipe/:id",
        component: AddRecipeComponent
      }
    ]

  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

