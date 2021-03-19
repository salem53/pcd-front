import { Component, OnInit } from '@angular/core';
import {FreelancerAuthenticationService} from "../services/freelancer/freelancer-authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signout-freelancer',
  templateUrl: './signout-freelancer.component.html',
  styleUrls: ['./signout-freelancer.component.css']
})
export class SignoutFreelancerComponent implements OnInit {

  constructor(
    private authenticationService: FreelancerAuthenticationService,
    private router: Router) {
  }
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['signin-freelancer']);
  }

}
