import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServiceExperienceService {



  urlExperiences = 'http://127.0.0.1:8070/experience';
  urlFreelancerExperience='http://127.0.0.1:8070/HavingExperience'

  constructor(private Http: HttpClient) { }
  createExperience(hexperience) // add a certain experience to a certain freelancer
  {
   
    return this.Http.post(this.urlFreelancerExperience+'/addHavingExperience',hexperience)
  }

  createNewExperience(exp)//add a new experience not been already enregistred
  {
   
    return this.Http.post(this.urlExperiences+'/addExperience',exp);
  }
  getExperience(company,position)//return the list of  experiences with this position and company name
  {
    return this.Http.get(this.urlExperiences +'/GetExperiencesByCompanyandPosition/'+company+'/'+position)
  }
  getIdExperience(company,position)//return the list of  experiences with this position and company name
  {
    return this.Http.get(this.urlExperiences +'/getIdExperience/'+company+'/'+position)
  }
  deleteExperience(idFreelancer,idExperience) {
    return this.Http.delete(this.urlFreelancerExperience + '/deleteHavingExperience/' +idFreelancer+'/'+idExperience);
  }
  updateExperience(exp) {
    return this.Http.put(this.urlFreelancerExperience + '/modifyAnExperience',exp);
  }
  getExperienceById(idFreelancer,idExperience)//return the list of  experiences with this position and company name
  {
    return this.Http.get(this.urlFreelancerExperience +'/getHavingExperienceById/'+idFreelancer+'/'+idExperience);
  }

}
