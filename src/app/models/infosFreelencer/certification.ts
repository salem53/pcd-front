import { Freelancer } from "../freelancer/freelancer";

export class Certified{
     
    date?:Date;
     url?:String;
     file?:FormData;
     freelancer?:Freelancer;
    certification?:Certification;
    idCertified?:IdCertified;
    }
    export class IdCertified
    {
      idFreelancer?:number;
      idCertification?:number;
    }
    export class Certification {
   
        name?:String;
        organism?:String;
       
        }
    