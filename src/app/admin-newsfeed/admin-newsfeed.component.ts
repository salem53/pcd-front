import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-newsfeed',
  templateUrl: './admin-newsfeed.component.html',
  styleUrls: ['./admin-newsfeed.component.css']
})
export class AdminNewsfeedComponent implements OnInit {
  email: string;
  firstName: string;
  lastName: string;
  constructor() { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("username");
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
  }

}
