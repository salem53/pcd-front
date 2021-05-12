import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-newsfeed',
  templateUrl: './freelancer-newsfeed.component.html',
  styleUrls: ['./freelancer-newsfeed.component.css']
})
export class FreelancerNewsfeedComponent implements OnInit {

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
