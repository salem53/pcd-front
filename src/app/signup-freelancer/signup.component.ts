import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  freelancer: any;
  constructor(private service: FreelancerService, private router : Router) { }
  ngOnInit() {
  }
  createFreelancer(myform) {

    this.service.createFreelancer(myform).subscribe(
      response => {
        sessionStorage.setItem('username', myform.value.freelancerEmail);
        /*sessionStorage.setItem('password', password)*/
        sessionStorage.setItem('role', "freelancer");
        sessionStorage.setItem('firstName', myform.value.freelancerFirstName);
        sessionStorage.setItem('lastName', myform.value.freelancerLastName);

        this.router.navigate(['newsfeed-freelancer'])
      }
    );


  }

}
