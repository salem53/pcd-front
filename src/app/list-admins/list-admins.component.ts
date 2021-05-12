import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {AdminService} from "../services/admin/admin.service";

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {

  admins: any;
  constructor(private service: AdminService, private router: Router) { }
  ngOnInit() {
    this.service.listAdmins().subscribe(
      response => {
        this.admins = response;
      }
    );
  }

  deleteAdmin(myObj) {
    this.service.deleteAdmin(myObj).subscribe(response => {
      console.log(response);
      this.refreshListAdmins();
    })
  }
  refreshListAdmins() {
    this.service.listAdmins().subscribe(
      response => {
        this.admins = response;
      }
    );
  }
  updateAdmin(myObj) {
    this.router.navigate(['updateAdmin' + '/' + myObj['id']]);
  }

}
