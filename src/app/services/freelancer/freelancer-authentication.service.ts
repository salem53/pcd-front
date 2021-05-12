import { Injectable } from '@angular/core';
import {FreelancerService} from "./freelancer.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FreelancerAuthenticationService {
  freelancer : any;
  username: any;
  password: any;
  test : boolean = false ;
  constructor(public service : FreelancerService,public router : Router) { }
  authenticate(username, password) : boolean {
     this.freelancer=this.service.getFreelancerByEmail(username).subscribe(
      response => {
            this.password= response["password"];
        console.log(this.freelancer);
        console.log(this.password);
        if (this.password==password) {
          sessionStorage.setItem('username', username) ;
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "freelancer") ;
          this.test = true;
          // @ts-ignore
          this.router.navigate(['newsfeed-freelancer'])
          return true;
        }
        }

    )
    // @ts-ignore
    //this.router.navigate(['newsfeed-freelancer'])
    return this.test

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('role')

    return (user === "freelancer")
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
  }
}
