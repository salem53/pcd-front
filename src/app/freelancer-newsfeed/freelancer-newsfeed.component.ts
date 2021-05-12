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
  address: string;
  description: string;
  earning: any;
  inscription_date: string;
  job: any;
  rating: any;
  sexe: any;
  telephone_number: any;
  nationality: any;
  constructor() { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("username");
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
    this.address=sessionStorage.getItem('address');
    this.description=sessionStorage.getItem('description');
    this.earning=sessionStorage.getItem('earning');
    this.inscription_date=sessionStorage.getItem('inscription_date');
    this.job=sessionStorage.getItem('job');
    this.rating=sessionStorage.getItem('rating');
    this.sexe=sessionStorage.getItem('sexe');
    this.telephone_number=sessionStorage.getItem('telephone_number');
    this.nationality=sessionStorage.getItem('nationality');
  }

}
