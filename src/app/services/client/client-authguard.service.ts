import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {ClientAuthenticationService} from "./client-authentication.service";



@Injectable({
  providedIn: 'root'
})
export class ClientAuthguardService implements CanActivate{

  constructor(private router: Router,
              private authService: ClientAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;
    this.router.navigate(['home']);
    return false;
  }
}
