import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FreelancerService} from "../services/freelancer/freelancer.service";

@Component({
  selector: 'app-list-freelancers',
  templateUrl: './list-freelancers.component.html',
  styleUrls: ['./list-freelancers.component.css']
})
export class ListFreelancersComponent implements OnInit {

  freelancers: any;
  constructor(private service: FreelancerService, private router: Router) { }
  ngOnInit() {
    this.service.listFreelancers().subscribe(
      response => {
        this.freelancers = response;
      }
    );
  }

  deleteFreelancer(myObj) {
    this.service.deleteFreelancer(myObj).subscribe(response => {
      console.log(response);
      this.refreshListFreelancers();
    })
  }
  refreshListFreelancers() {
    this.service.listFreelancers().subscribe(
      response => {
        this.freelancers = response;
      }
    );
  }
  updateFreelancer(myObj) {
    this.router.navigate(['updateFreelancer' + '/' + myObj['id']]);
  }

}
