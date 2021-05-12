import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {FlaskServiceService} from "../services/flask/flask-service.service";

@Component({
  selector: 'app-test-flask',
  templateUrl: './test-flask.component.html',
  styleUrls: ['./test-flask.component.css']
})
export class TestFlaskComponent implements OnInit {

  test: any;
  constructor(private service: FlaskServiceService, private router: Router) { }
  ngOnInit() {
    this.service.getHelloWorld().subscribe(
      response => {
        this.test = response;
        console.log(response);
      }
    );
  }

}
