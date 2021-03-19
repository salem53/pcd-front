import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClientAuthenticationService} from "../services/client/client-authentication.service";
import {AdminAuthenticationService} from "../services/admin/admin-authentication.service";
import {AdminService} from "../services/admin/admin.service";

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent implements OnInit {

  admin: any;
  username: string;
  firstName : string;
  lastName : string;
  password: string;
  password_verification: string;
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  default_password="admin123456"
  default_email="admin.default@freelance.com"

  constructor(private router: Router,
              private service: AdminService) {
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
    if(this.username===this.default_email && this.password===this.default_password){
      sessionStorage.setItem('username', this.username);
      /*sessionStorage.setItem('password', password)*/
      sessionStorage.setItem('role', "admin");
      sessionStorage.setItem('firstName', "admin");
      sessionStorage.setItem('lastName', "default");
      // @ts-ignore
      this.invalidLogin = false;
      this.router.navigate(['freelancers'])

      return true;
    }
    this.admin = this.service.getAdminByEmail(this.username).subscribe(
      response => {
        if (response==null) {
          this.invalidLogin=true;
          return false;
        }
        this.password_verification = response["password"];
        this.firstName = response["firstName"];
        this.lastName = response["lastName"];
        console.log(this.admin);
/*
        console.log(this.password);
*/
        if (this.password_verification == this.password) {
          sessionStorage.setItem('username', this.username);
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "admin");
          sessionStorage.setItem('firstName', this.firstName);
          sessionStorage.setItem('lastName', this.lastName);
          // @ts-ignore
          this.invalidLogin = false;
          this.router.navigate(['freelancers'])

          return true;
        }
        else {
          this.invalidLogin = true;
          this.router.navigate(['signin-admin'])

          return true;
        }

      }
    )
  }

}
