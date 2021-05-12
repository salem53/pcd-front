import { Component, OnInit } from '@angular/core';
import {ClientAuthenticationService} from "../services/client/client-authentication.service";
import {Router} from "@angular/router";
import {ClientService} from "../services/client/client.service";

@Component({
  selector: 'app-signin-client',
  templateUrl: './signin-client.component.html',
  styleUrls: ['./signin-client.component.css']
})
export class SigninClientComponent implements OnInit {

  client: any;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  password_verification: string;
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";

  constructor(private router: Router,
              private service: ClientService) {
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
    this.client = this.service.getClientByEmail(this.username).subscribe(
      response => {
        if (response==null) {
          this.invalidLogin=true;
          return false;
        }
        this.password_verification = response["password"];
        this.firstName = response["firstName"];
        this.lastName = response["lastName"];
        console.log(this.client);
/*
        console.log(this.password);
*/
        if (this.password_verification == this.password) {
          sessionStorage.setItem('username', this.username);
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "client");
          sessionStorage.setItem('firstName', this.firstName);
          sessionStorage.setItem('lastName', this.lastName);
          // @ts-ignore
          this.invalidLogin = false;
          this.router.navigate(['newsfeed-client'])

          return true;
        }
        else {
          this.invalidLogin = true;
          this.router.navigate(['signin-client'])

          return true;
        }

      }
    )
  }

}
