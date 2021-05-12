import { Component, OnInit } from '@angular/core';
import {AdminAuthenticationService} from "../services/admin/admin-authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signout-admin',
  templateUrl: './signout-admin.component.html',
  styleUrls: ['./signout-admin.component.css']
})
export class SignoutAdminComponent implements OnInit {

  constructor(
    private authenticationService: AdminAuthenticationService,
    private router: Router) {
  }
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['signin-admin']);
  }

}
