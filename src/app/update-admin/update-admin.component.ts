import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../services/admin/admin.service";

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  _id;
  _providerToUpdate;
  _firstName;
  _lastName;
  _email;
  _password;
  _terms_conditions;
  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this._id = params.get('id');
      }
    );
    this._providerToUpdate = this.service.getAdmin(this._id).subscribe(
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
  updateAdmin() {

    this._providerToUpdate = {
      'firstName': this._firstName,
      'lastName': this._lastName,
      'password': this._password,
      'email': this._email,
      'id': this._id,
      'terms_conditions': this._terms_conditions
    }

    this.service.updateAdmin(this._providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['admins']);
      }
    );

  }

}
