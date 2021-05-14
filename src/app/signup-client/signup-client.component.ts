import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {ClientService} from "../services/client/client.service";

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  client: any;
  constructor(private service: ClientService, private router : Router) { }
  ngOnInit() {
  }
  createClient(myform) {

    this.service.createClient(myform).subscribe(
      response => {
        sessionStorage.setItem('username', myform.value.clientEmail);
        /*sessionStorage.setItem('password', password)*/
        sessionStorage.setItem('role', "client");
        sessionStorage.setItem('firstName', myform.value.clientFirstName);
        sessionStorage.setItem('lastName', myform.value.clientLastName);

        this.router.navigate(['newsfeed-client'])
        /*console.log(response);
        this.router.navigate(['clients']);*/
      }
    );


  }

}
