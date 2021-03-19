import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {ClientService} from "../services/client/client.service";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: any;
  constructor(private service: ClientService, private router: Router) { }
  ngOnInit() {
    this.service.listClients().subscribe(
      response => {
        this.clients = response;
      }
    );
  }

  deleteClient(myObj) {
    this.service.deleteClient(myObj).subscribe(response => {
      console.log(response);
      this.refreshListClients();
    })
  }
  refreshListClients() {
    this.service.listClients().subscribe(
      response => {
        this.clients = response;
      }
    );
  }
  updateClient(myObj) {
    this.router.navigate(['updateClient' + '/' + myObj['id']]);
  }

}
