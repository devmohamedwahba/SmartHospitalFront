import { TokenInterceptor } from './interceptor/token-interceptor.ts ';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DrugAddComponent } from './components/drug-add/drug-add.component';
import { DrugsComponent } from './components/drugs/drugs.component';
import { UsersComponent } from './components/users/users.component';
import { DoctorlayoutComponent } from './components/doctor/doctorlayout/doctorlayout.component';
import { SearchComponent } from './components/doctor/search/search.component';
import { DoctorsidebarComponent } from './components/doctor/doctorsidebar/doctorsidebar.component';
import { RecipeComponent } from './components/doctor/recipe/recipe.component';
import { SearchNationalIdComponent } from './components/doctor/search-national-id/search-national-id.component';
import { AddPatientComponent } from './components/doctor/add-patient/add-patient.component';
import { AddRecipeComponent } from './components/doctor/add-recipe/add-recipe.component';
import { PharmacyLayoutComponent } from './components/pharmacy/pharmacy-layout/pharmacy-layout.component';
import { PharmacySearchComponent } from './components/pharmacy/pharmacy-search/pharmacy-search.component';
import { PharmacyNationalIdComponent } from './components/pharmacy/pharmacy-national-id/pharmacy-national-id.component';
import { PharmacySideBarComponent } from './components/pharmacy/pharmacy-side-bar/pharmacy-side-bar.component';
import { PharmacyRecipeComponent } from './components/pharmacy/pharmacy-recipe/pharmacy-recipe.component';
import { DrugEditComponent } from './components/drug-edit/drug-edit.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NotFoundComponent,
    HomeComponent,
    AdminLayoutComponent,
    SideBarComponent,
    DrugAddComponent,
    DrugsComponent,
    UsersComponent,
    DoctorlayoutComponent,
    SearchComponent,
    DoctorsidebarComponent,
    RecipeComponent,
    SearchNationalIdComponent,
    AddPatientComponent,
    AddRecipeComponent,
    PharmacyLayoutComponent,
    PharmacySearchComponent,
    PharmacyNationalIdComponent,
    PharmacySideBarComponent,
    PharmacyRecipeComponent,
    DrugEditComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
