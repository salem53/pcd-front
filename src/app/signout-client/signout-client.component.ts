import { Component, OnInit } from '@angular/core';
import {ClientAuthenticationService} from "../services/client/client-authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signout-client',
  templateUrl: './signout-client.component.html',
  styleUrls: ['./signout-client.component.css']
})
export class SignoutClientComponent implements OnInit {

  constructor(
    private authenticationService: ClientAuthenticationService,
    private router: Router) {
  }
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['signin-client']);
  }

}
