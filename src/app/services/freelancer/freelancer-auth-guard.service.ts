import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {FreelancerAuthenticationService} from "./freelancer-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class FreelancerAuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: FreelancerAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;
    this.router.navigate(['home']);
    return false;
  }
}
