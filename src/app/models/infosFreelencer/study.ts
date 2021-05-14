import { Freelancer } from "../freelancer/freelancer";

export class Study 
{
    beginningDate?:Date;
    endDate?:Date;
    freelancer?:Freelancer;
    education?:Education;
    idStudy?:IdStudy;
    description?:String;
  
}
export class IdStudy
{
    IdFreelancer?:number;
  IdEducation?:number;
}
export class Education
{
school?:String;
degree?:String;
}