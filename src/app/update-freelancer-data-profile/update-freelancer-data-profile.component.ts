import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-freelancer-data-profile',
  templateUrl: './update-freelancer-data-profile.component.html',
  styleUrls: ['./update-freelancer-data-profile.component.css']
})
export class UpdateFreelancerDataProfileComponent implements OnInit {
  public freelancer;
  id;
  image;
   freelancerFirstName;
   freelancerLastName;
   freelancerPassword;
   freelancerPasswordConfirmation;
   freelancerEmail;
   freelancerAddress;
  freelancerDescription;
  freelancerJob;
  freelancerEarning;
  freelancerRating;
  freelancerBirthday;
  freelancerTelephoneNumber;
   _selectedGender;
  _selectedNationality;
  invalidLogin : boolean = false;
  errorMessage;
   inscription;
  constructor(public service : FreelancerService,public router : Router) {
    this.service.getFreelancerByEmail(sessionStorage.getItem("username"))
      .subscribe(response => {
        this.id = response['id'];
        this.freelancerPassword = response['password'];
        this.freelancerFirstName = response["firstName"];
        this.freelancerLastName = response["lastName"];
        this.freelancerAddress = response["address"];
        this.freelancerEmail = response["email"];
        this.freelancerDescription = response["description"];
        this.freelancerEarning = response["earning"] ;
        this.freelancerJob = response["job"];
        this.freelancerRating = response["rating"];
        this._selectedGender = response["sexe"];
        this.freelancerTelephoneNumber = response["telephoneNumber"];
        this._selectedNationality = response["nationality"];
        this.image=response["image"];
        this.inscription = response["inscriptionDate"]
      }
    )
  }

  ngOnInit(): void {
  }

  updateFreelancer(myform) {
    this.freelancer = {
      'id':this.id,
      'firstName':this.freelancerFirstName,
      'lastName':this.freelancerLastName,
      'password':this.freelancerPassword,
      'email':this.freelancerEmail,
      'address':this.freelancerAddress,
      'description':this.freelancerDescription,
      'job':this.freelancerJob,
      'earning':this.freelancerEarning,
      'rating':this.freelancerRating,
      'birthday':this.freelancerBirthday,
      'telephoneNumber':this.freelancerTelephoneNumber,
      'sexe':this._selectedGender,
    'nationality':this._selectedNationality,
      'image' : this.image,
      'inscription' : this.inscription
    };

    this.service.updateFreelancerProfile(this.freelancer).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['newsfeed-freelancer']);
      }
    );
  }
}
