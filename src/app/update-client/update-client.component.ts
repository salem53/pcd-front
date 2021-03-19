import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client/client.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  _id;
  _clientToUpdate;
  _firstName;
  _lastName;
  _email;
  _password;
  _terms_conditions;
  constructor(private service: ClientService, private router: Router, private route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this._id = params.get('id');
      }
    );
    this._clientToUpdate = this.service.getClient(this._id).subscribe(
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
  updateClient() {

    this._clientToUpdate = {
      'firstName': this._firstName,
      'lastName': this._lastName,
      'password': this._password,
      'email': this._email,
      'id': this._id,
      'terms_conditions': this._terms_conditions
    }

    this.service.updateClient(this._clientToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['clients']);
      }
    );

  }

}
