import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  freelancer: any;
  private _selected: "Male";
  private _selectedGender: any;
  _selectedNationality: any;
  private _terms : boolean = false;
   invalidLogin : boolean = false;
  errorMessage;


  get terms(): any {
    return this._terms;
  }

  set terms(value: any) {
    this._terms = value;
  }

  get selectedNationality(): any {
    return this._selectedNationality;
  }

  set selectedNationality(value: any) {
    this._selectedNationality = value;
  }

  get selectedGender(): any {
    return this._selectedGender;
  }

  set selectedGender(value: any) {
    this._selectedGender = value;
  }

  get selected(): any {
    return this._selected;
  }

  set selected(value: any) {
    this._selected = value;
  }

  constructor(private service: FreelancerService, private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    const letters=/^[a-zA-Z]+$/;
    let firstName : string = (myform.value.freelancerFirstName);
    let lastName : string = myform.value.freelancerLastName;
    let password : string = myform.value.freelancerPassword;
    let passwordConfirmation   : string = myform.value.freelancerPasswordConfirmation;
    let email  : string = myform.value.freelancerEmail;
    let atposition=email.indexOf("@");
    let dotposition=email.lastIndexOf(".");
    if (firstName==null || firstName=="" || lastName==null || lastName=="") {
          this.errorMessage ="First Name and Last Name can't be blank";
          this.invalidLogin =true;
        }
        else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
            this.errorMessage ="Please enter a valid e-mail address ";
            this.invalidLogin =true;
        }
        else if(password.length<8) {
          this.errorMessage ="Password must be at least 8 characters long.";
          this.invalidLogin =true;
        }
        else if (password!=passwordConfirmation) {
          this.errorMessage ="password and confirmation password must be same!";
          this.invalidLogin =true;
          /*console.log(password);
          console.log(passwordConfirmation);*/
        }
        else if (!this.terms){
           this.errorMessage ="Please read the Terms and Conditions";
            this.invalidLogin =true;
        }
        else {
          this.invalidLogin = false;
        }



  }
  createFreelancer(myform) {

    this.checkForm(myform);
    if(!this.invalidLogin){
      this.service.createFreelancer(myform,this.selectedGender,this.selectedNationality).subscribe(
        response => {
          sessionStorage.setItem('username', myform.value.freelancerEmail);
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "freelancer");
          sessionStorage.setItem('firstName', myform.value.freelancerFirstName);
          sessionStorage.setItem('lastName', myform.value.freelancerLastName);

          this.router.navigate(['newsfeed-freelancer'])
        }
      );

    }



  }

}
