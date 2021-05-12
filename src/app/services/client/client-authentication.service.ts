import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthenticationService {

  authenticate(username, password) {
    if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('role', "client")
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('role')
    return (user === "client");
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
  }
}
