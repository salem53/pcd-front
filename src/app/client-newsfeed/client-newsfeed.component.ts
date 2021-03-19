import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-newsfeed',
  templateUrl: './client-newsfeed.component.html',
  styleUrls: ['./client-newsfeed.component.css']
})
export class ClientNewsfeedComponent implements OnInit {

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
