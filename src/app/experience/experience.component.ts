import { FreelancerService } from './../services/freelancer/freelancer.service';
import { Freelancer } from './../models/freelancer/freelancer';
import { Experience, havingExperience, IdHavingExperience } from './../models/infosFreelencer/experience';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ServiceExperienceService } from '../services/InfosFreelancer/service-experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private service: ServiceExperienceService, private router : Router, private route: ActivatedRoute ) { }
 
  freelancer:any={};
  hexperience:havingExperience={};
  idHexp:IdHavingExperience={};
  ngOnInit(): void {}
  exp:any={};

    newExperience(form)
    {
     
      this.exp=
      {
        'company':form.value.company,
        'positionTitle':form.value.position,
        'id':0
      }
      this.hexperience.beginingDate=form.value.beginingDate;
      this.hexperience.endingDate=form.value.endingDate;
      this.hexperience.jobType=form.value.jobType;
      this.hexperience.description=form.value.description;      
     /* this.chaine= this.route.snapshot.params.company;
      this.entier=parseInt(this.route.snapshot.params.id);
    console.log("id="+this.entier);
    console.log("company="+this.chaine);*/
      
      this.freelancer.id=parseInt(this.route.snapshot.params.id);
      this.hexperience.freelancer=this.freelancer;
      this.hexperience.idHavingExperience=this.idHexp;
                
      this.service.getExperience(form.value.company,form.value.position).subscribe(
        response => {
         
          if (response[0]==null)//this experience isn't already registred
           {
          this.service.createNewExperience(this.exp).subscribe( responses => { 
         
            this.exp=
            {
            'company':form.value.company,
            'positionTitle':form.value.position,
            'id':responses["id"]
             }
        //  console.log(this.exp.id);
          this.hexperience.experience=this.exp; 
          this.service.createExperience(this.hexperience).subscribe( responsee => { // console.log(responsee);
          });
          });                               
         }
         else
         {
          this.exp=
          {
          'company':form.value.company,
          'positionTitle':form.value.position,
          'id':response[0]["id"]
           }
           this.hexperience.experience=this.exp; 
          //console.log(response[0]["id"]);
          this.service.createExperience(this.hexperience).subscribe( responsee => { console.log(responsee);});

         }
       
        }
        );
 
        }


}

