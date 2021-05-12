import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlAdmins = 'http://127.0.0.1:8070/admins';
  admin: any;
  constructor(private Http: HttpClient) { }
  listAdmins() {
    return this.Http.get(this.urlAdmins + '/list');
  }
  createAdmin(myform) {
    this.admin = {
      'firstName': myform.value.adminFirstName,
      'lastName': myform.value.adminLastName,
      'password' : myform.value.adminPassword,
      'email': myform.value.adminEmail,
      'terms_conditions': myform.value.adminTerms
    }
    return this.Http.post(this.urlAdmins + '/add', this.admin);
  }
  updateAdmin(myObj) {
    return this.Http.put(this.urlAdmins + '/' + myObj['id'], myObj);
  }
  deleteAdmin(myObj) {
    return this.Http.delete(this.urlAdmins + '/' + myObj['id'], myObj)
  }
  getAdmin(id) {
    return this.Http.get(this.urlAdmins + '/' + id)
  }
  getAdminByEmail(email){
    return this.Http.get(this.urlAdmins+'/getAdminByEmail/'+email)
  }
}
