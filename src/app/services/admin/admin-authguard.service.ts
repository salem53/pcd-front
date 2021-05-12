import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AdminAuthenticationService} from "./admin-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService implements CanActivate {

  constructor(private router: Router,
              private authService: AdminAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;
    this.router.navigate(['home']);
    return false;
  }
}
