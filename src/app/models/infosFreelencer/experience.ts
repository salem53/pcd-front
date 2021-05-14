
import { Freelancer } from "../freelancer/freelancer";

export class Experience {
   
    positionTitle?:String;
    company?:String;
   
    }

    export class havingExperience {
     
       beginingDate?:Date;
       endingDate?:Date;
       description?:String;
       jobType?:String;
       freelancer?:Freelancer;
       experience?:Experience;
       idHavingExperience?:IdHavingExperience;
       }
       export class IdHavingExperience
       {
         idFreelancer?:number;
         idExperience?:number;
       }