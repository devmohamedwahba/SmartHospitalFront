import { User } from './../interfaces/user';
import { Roles } from './../interfaces/roles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drug } from '../interfaces/drug';
import { tick } from '@angular/core/testing';



@Injectable({
  providedIn: "root"
})
export class AdminService {
  private url = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) { }

  createUser(Form) {
    return this.http.post(`${this.url}/register`, Form);
  }
  deleteUser(id) {
    return this.http.delete(`${this.url}/user/${id}`);
  }

  createDrug(Form) {
    return this.http.post<Drug[]>(`${this.url}/drug`, Form);
  }

  updateDrug({ id, form }) {
    return this.http.put<Drug[]>(`${this.url}/drug/${id}`, form);
  }
  deleteDrug(id) {
    return this.http.delete(`${this.url}/drug/${id}`);
  }
  getAllUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getAllDrugs() {
    return this.http.get<Drug[]>(`${this.url}/drugs`);
  }

  getAllRoles() {
    return this.http.get<Roles[]>(`${this.url}/roles`);
  }

  findDrugDetails(drugId) {
    return this.http.get<Drug>(`${this.url}/drug/${drugId}`)
  }

  findUserDetails(userId) {
    return this.http.get(`${this.url}/user/${userId}`)
  }
  updateUser({ id, form }) {
    return this.http.put<Drug[]>(`${this.url}/user/${id}`, form);

  }
}
