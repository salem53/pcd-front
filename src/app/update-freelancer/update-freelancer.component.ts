import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-freelancer',
  templateUrl: './update-freelancer.component.html',
  styleUrls: ['./update-freelancer.component.css']
})
export class UpdateFreelancerComponent implements OnInit {

  _id;
  _providerToUpdate;
  _firstName;
  _lastName;
  _email;
  _password;
  _terms_conditions;
  constructor(private service: FreelancerService, private router: Router, private route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this._id = params.get('id');
      }
    );
    this._providerToUpdate = this.service.getFreelancer(this._id).subscribe(
      response => {
        //console.log(response);
        this._firstName = response["firstName"];
        this._lastName = response["lastName"];
        this._email = response["email"];
        this._password = response["password"];
        this._terms_conditions=response["terms_conditions"]

      }
    );
    // this.initFormUpdateFreelancer(myform);
  }
  updateFreelancer() {

    this._providerToUpdate = {
      'firstName': this._firstName,
      'lastName': this._lastName,
      'password': this._password,
      'email': this._email,
      'id': this._id,
      'terms_conditions': this._terms_conditions
    }

    this.service.updateFreelancer(this._providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['freelancers']);
      }
    );

  }


}
