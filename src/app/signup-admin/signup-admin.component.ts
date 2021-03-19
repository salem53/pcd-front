import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {AdminService} from "../services/admin/admin.service";

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {

  freelancer: any;
  constructor(private service: AdminService, private router : Router) { }
  ngOnInit() {
  }
  createAdmin(myform) {

    this.service.createAdmin(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['admins']);
      }
    );


  }

}
