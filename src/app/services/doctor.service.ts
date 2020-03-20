import { Patient } from './../interfaces/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrugDoctor } from '../interfaces/drug-doctor';
import { Drug } from '../interfaces/drug';
import { Department } from '../interfaces/department';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url = "http://127.0.0.1:5000";

  constructor(private http:HttpClient) { }

  searchById(Form){
    return this.http.post<Patient>(`${this.url}/search`, Form);
  }

  searchByNationalId(Form) {
    return this.http.post<Patient>(`${this.url}/search/national_id`, Form);
  }
  showRecipe(recipe_id){
    return this.http.get<Recipe>(`${this.url}/recipe/search/${recipe_id}`);
  }

  addPatient(form){
    return this.http.post<Patient>(`${this.url}/patient`, form)
  }

  doctorDrug(){
    return this.http.post<DrugDoctor[]>(`${this.url}/doctor_drug`,null)
  }
  getDrug(id){
    return this.http.get<Drug>(`${this.url}/drug/${id}`)
  }
  getDrugName(name) {
    return this.http.get<Drug>(`${this.url}/drug/${name}`)
  }
  getDepartments(){
    return this.http.get<Department[]>(`${this.url}/departments`)
  }

  addRecipe(recipeForm){
    return this.http.post(`${this.url}/recipe`,recipeForm)
  }

}
