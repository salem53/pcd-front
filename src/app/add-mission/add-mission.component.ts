import { MissionService } from './../services/missions/mission.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {
 
  constructor(private router : Router, private route: ActivatedRoute,private service: MissionService) { }
  freelancer:any={};
  mission:any={};
  ngOnInit(): void {
  }
  newMission(form)
  {
    this.mission=
    {
      'id':"",
    'beginningDate':form.value.beginningDate,
    'duration':form.value.duration,
   'file':form.value.file,
     'hired':false,
     'completed':false,
    'invited':false,
     'title':form.value.title,
    'description':form.value.description,
    'averagePayment':form.value.averagePayment,
     'freelancer':this.freelancer,
    'client':parseInt(this.route.snapshot.params.idClient),
    'technologies':form.value.technologies,
    'contrat':""
    }
    this.service.createMission(this.mission);
  }

}
