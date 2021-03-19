import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FreelancerAuthenticationService} from "../services/freelancer/freelancer-authentication.service";
import {FreelancerService} from "../services/freelancer/freelancer.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  freelancer: any;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  password_verification: string;
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";

  constructor(private router: Router,
              private service: FreelancerService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    /*console.log("hedhy")
    console.log(this.loginservice.authenticate(this.username, this.password))
    if (this.loginservice.authenticate(this.username, this.password)) {
      console.log("dkhal");
      this.router.navigate(['newsfeed-freelancer']);
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }*/
    this.freelancer = this.service.getFreelancerByEmail(this.username).subscribe(
      response => {
        if (response==null) {
          this.invalidLogin=true;
          return false;
        }
        this.password_verification = response["password"];
        this.firstName = response["firstName"];
        this.lastName = response["lastName"];
        console.log(this.freelancer);
/*
        console.log(this.password);
*/
        if (this.password_verification == this.password) {
          sessionStorage.setItem('username', this.username);
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "freelancer");
          sessionStorage.setItem('firstName', this.firstName);
          sessionStorage.setItem('lastName', this.lastName);
          // @ts-ignore
          this.invalidLogin = false;
          this.router.navigate(['newsfeed-freelancer'])

          return true;
        }
          else {
          this.invalidLogin = true;
          this.router.navigate(['signin-freelancer'])

          return true;
          }

      }
    )
  }
}

