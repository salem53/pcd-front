import { Component, OnInit } from '@angular/core';
import {FreelancerAuthenticationService} from "../services/freelancer/freelancer-authentication.service";
import {ClientAuthenticationService} from "../services/client/client-authentication.service";
import {AdminAuthenticationService} from "../services/admin/admin-authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: FreelancerAuthenticationService,
              public loginServiceClient : ClientAuthenticationService,
              public loginServiceAdmin : AdminAuthenticationService,
              ) { }

  ngOnInit(): void {
  }

}
