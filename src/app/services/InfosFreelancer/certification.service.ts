import { Certification } from './../../models/infosFreelencer/certification';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  urlCertifications = 'http://127.0.0.1:8070/certification';
  urlFreelancerCertification='http://127.0.0.1:8070/certified';

  constructor(private Http: HttpClient) { }
  createCertification(certif) // add a certain experience to a certain freelancer
  {
   
    return this.Http.post(this.urlFreelancerCertification+'/addCertified',certif);
   }
  createNewCertification(certif)//add a new certification not been already enregistred
  {
    return this.Http.post(this.urlCertifications+'/addCertification',certif);
  }
  getIdCertification(name,organism)//return the list of  certification with this name and organism
  {
    return this.Http.get(this.urlCertifications +'/getIdExperience/'+name+'/'+organism);
  }
  getCertification(name,organism)//return the list of  certification with this name and organism
  {
    return this.Http.get(this.urlCertifications +'/getCertificationByNameAndOrganism/'+name+'/'+organism);
  }
  deleteCertification(idFreelancer,idCertification) {
    return this.Http.delete(this.urlFreelancerCertification + '/deleteCertified/' +idFreelancer+'/'+idCertification);
  }
  updateCertification(certif) {
    return this.Http.put(this.urlFreelancerCertification + '/updateCertified',certif);
  }
  getCertifiedById(idFreelancer,idCertification)//return the list of  experiences with this position and company name
  {
    return this.Http.get(this.urlFreelancerCertification+'/getCertifiedById/'+idFreelancer+'/'+idCertification);
  }

  uploadFile(uploadFileData,idF,idC)//send a file in orderto save it in a folder
  {
   
    //this.Http.post('http://127.0.0.1:8070/file/uploadFile',uploadFileData, { observe: 'response' }).subscribe((response) => {      
    this.Http.post('http://127.0.0.1:8070/certified/uploadFile/'+idF+'/'+idC,uploadFileData, { observe: 'response' }).subscribe((response) => {
    }
    );
  
  }
  uploadImage(uploadFileData)//save an image in the dataBase
  {
    this.Http.post('http://127.0.0.1:8070/file/uploadImage',uploadFileData, { observe: 'response' }).subscribe((response) => {
    
    }
    );
 
    
  }


}

