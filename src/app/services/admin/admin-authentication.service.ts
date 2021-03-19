import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {
  authenticate(username, password) {
    if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('role', "admin")
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('role')
    return (user === "admin");
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
  }
}
