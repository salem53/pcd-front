import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudyService } from '../services/InfosFreelancer/study.service';
import { IdStudy, Study } from '../models/infosFreelencer/study';

@Component({
  selector: 'app-add-study',
  templateUrl: './add-study.component.html',
  styleUrls: ['./add-study.component.css']
})
export class AddStudyComponent implements OnInit {

  constructor(private service: StudyService, private router : Router, private route: ActivatedRoute)
  { }
  freelancer:any={};
  study:Study={};
  idStudy:IdStudy={};
  education:any={};
  errorMessage = "You already have entered this educational experience";
  invalid = false;
  ngOnInit(): void {
  }
  newEducation(form)
  {
   
    this.education=
    {
        'school':form.value.school,
        'degree':form.value.degree,
        'id':0
    }
    console.log()
    this.study.beginningDate=form.value.beginningDate;
    this.study.endDate=form.value.endDate;
    this.study.description=form.value.description;

    this.freelancer.id=parseInt(this.route.snapshot.params.idFreelancer);
    this.study.freelancer=this.freelancer;
    this.study.idStudy=this.idStudy;
    this.service.getEducation(form.value.school,form.value.degree).subscribe(
      response => {
      // console.log(response);
        if (response[0]==null)//this educational experience isn't already registred in the data base
        {
          this.service.createNewEducation(this.education).subscribe( responses => {
            //console.log(responses);
            this.education=
            {
                'School':form.value.school,
                'degree':form.value.degree,
                'id':responses["id"]
            }
            
            this.study.education=this.education;
            this.service.createStudy(this.study).subscribe( responsee => { 
            },error => {console.log('newerror', error),this.invalid=true;}) 

           

          });
            
        }
        else
         {

          this.education=
          {
              'school':form.value.school,
              'degree':form.value.degree,
              'id':response[0]["id"]
          }
          this.study.education=this.education;
            this.service.createStudy(this.study).subscribe( responsee => { 
            },error => {console.log('dejaerror', error);this.invalid=true;});
             
            
          
         }






      });
    
  }

  RefreshPageInCaseOfError(n)
  {
    if(n==true)
    {
      //this.router.navigate(['newStudy/'+this.route.snapshot.params.idFreelancer]);
    console.log("hello");
  }
  }

}
