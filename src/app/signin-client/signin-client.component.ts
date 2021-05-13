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
  address: string;
  description: string;
  earning: any;
  inscription_date: string;
  job: any;
  rating: any;
  sexe: any;
  telephone_number: any;
  nationality: any;
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
        this.address = response["address"];
        this.description = response["description"];
        this.earning = response["earning"]+" $/hour";
        this.inscription_date = response["inscriptionDate"];
        this.job = response["job"];
        this.rating = response["rating"];
        this.sexe = response["sexe"];
        this.telephone_number = response["telephoneNumber"];
        this.nationality = response["nationality"];
        console.log(this.client);
        /*
                console.log(this.password);
        */
        if (this.password_verification == this.password) {
          sessionStorage.setItem('username', this.username);
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "freelancer");
          sessionStorage.setItem('firstName', this.firstName);
          sessionStorage.setItem('lastName', this.lastName);
          sessionStorage.setItem('address', this.address);
          sessionStorage.setItem('description', this.description);
          sessionStorage.setItem('earning', this.earning);
          sessionStorage.setItem('inscription_date', this.inscription_date);
          sessionStorage.setItem('job', this.job);
          sessionStorage.setItem('rating', this.rating);
          sessionStorage.setItem('sexe', this.sexe);
          sessionStorage.setItem('telephone_number', this.telephone_number);
          sessionStorage.setItem('nationality', this.nationality);

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
