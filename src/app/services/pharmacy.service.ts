import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  private url = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) { }

  spendRecipe(recipe)
  {
    return this.http.post(`${this.url}/recipe_spend`, recipe)
  }
}
