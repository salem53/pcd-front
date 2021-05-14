import { Freelancer } from "../freelancer/freelancer";
import { Certification } from "../infosFreelencer/certification";

export class Certified{
     
    id?:number;
    beginningDate?:Date;
    duration?:number;
     file?:String;
     hired?:boolean;
     completed?:boolean;
    invited?:boolean;
     title?:String;
    description?:String;
    averagePayment?:number;
     freelancer?:Freelancer;
    certification?:Certification;
    technologies?:String;
    contrat?:String;
    }
  