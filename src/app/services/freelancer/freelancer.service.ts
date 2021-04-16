import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  urlFreelancers = 'http://127.0.0.1:8070/freelancers';
  freelancer: any;
  constructor(private Http: HttpClient) { }
  listFreelancers() {
    return this.Http.get(this.urlFreelancers + '/list');
  }

  createFreelancer(myform, gender: any, nationality: any) {
    this.freelancer = {
      'firstName': myform.value.freelancerFirstName,
      'lastName': myform.value.freelancerLastName,
      'password' : myform.value.freelancerPassword,
      'email': myform.value.freelancerEmail,
      'address': myform.value.freelancerAddress,
      'birthday':myform.value.freelancerBirthday,
      'sexe' : gender,
      'telephoneNumber':myform.value.freelancerTelephoneNumber,
      'job': myform.value.freelancerJob,
      'earning' : myform.value.freelancerEarning,
      'nationality' : nationality,
      'description' :myform.value.freelancerDescription,

    }
    return this.Http.post(this.urlFreelancers + '/add', this.freelancer);
  }
  updateFreelancer(myObj) {
    return this.Http.put(this.urlFreelancers + '/' + myObj['id'], myObj);
  }
  deleteFreelancer(myObj) {
    return this.Http.delete(this.urlFreelancers + '/' + myObj['id'], myObj)
  }
  getFreelancer(id) {
    return this.Http.get(this.urlFreelancers + '/' + id)
  }

  getFreelancerByEmail(email){
    return this.Http.get(this.urlFreelancers+'/getFreelancerByEmail/'+email)
  }

}

