import { ClientService } from './../services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {

  constructor(private serviceClient:ClientService) { 
    this.serviceClient.getClient(2)
     
      .subscribe(c=>{
             this.client=c;
             //this.router.navigate(['profil-client']);
             //console.log(this.client);

   
      });
 
   
  }

  ngOnInit(): void {
  }
client:any={};
  GetClientInformation()
  {
    this.serviceClient.getClient(2)
     
      .subscribe(c=>{
             this.client=c;
             //this.router.navigate(['profil-client']);
             console.log(this.client);

   
      });

  }
}
