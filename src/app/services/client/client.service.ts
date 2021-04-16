import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  urlClients = 'http://127.0.0.1:8070/clients';
  client: any;
  constructor(private Http: HttpClient) { }
  listClients() {
    return this.Http.get(this.urlClients + '/list');
  }

    createClient(myform, selectedGender: any, selectedNationality: any) {
    this.client = {
      'firstName': myform.value.clientFirstName,
      'lastName': myform.value.clientLastName,
      'password' : myform.value.clientPassword,
      'email': myform.value.clientEmail,
      'address': myform.value.clientAddress,
      'birthday':myform.value.clientBirthday,
      'sexe' : selectedGender,
      'telephoneNumber':myform.value.clientTelephoneNumber,
      'job': myform.value.clientJob,
      'earning' : myform.value.clientEarning,
      'nationality' : selectedNationality,
      'description' :myform.value.clientDescription,
    }
    return this.Http.post(this.urlClients + '/add', this.client);
  }
  updateClient(myObj) {
    return this.Http.put(this.urlClients + '/' + myObj['id'], myObj);
  }
  deleteClient(myObj) {
    return this.Http.delete(this.urlClients + '/' + myObj['id'], myObj)
  }
  getClient(id) {
    return this.Http.get(this.urlClients + '/' + id)
  }
  getClientByEmail(email){
    return this.Http.get(this.urlClients+'/getClientByEmail/'+email)
  }
}
