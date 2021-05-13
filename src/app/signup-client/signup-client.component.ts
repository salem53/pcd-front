import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {ClientService} from "../services/client/client.service";

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  client: any;
  _selectedNationality: any;
  _selectedGender: any;
  private _terms:boolean =false;
  private _invalidLogin : boolean = false;
  private _errorMessage;

  get invalidLogin(): boolean {
    return this._invalidLogin;
  }

  set invalidLogin(value: boolean) {
    this._invalidLogin = value;
  }

  get errorMessage() {
    return this._errorMessage;
  }

  set errorMessage(value) {
    this._errorMessage = value;
  }

  get terms(): boolean {
    return this._terms;
  }

  set terms(value: boolean) {
    this._terms = value;
  }

  get selectedGender(): any {
    return this._selectedGender;
  }

  set selectedGender(value: any) {
    this._selectedGender = value;
  }

  get selectedNationality(): any {
    return this._selectedNationality;
  }

  set selectedNationality(value: any) {
    this._selectedNationality = value;
  }

  constructor(private service: ClientService, private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    const letters=/^[a-zA-Z]+$/;
    let firstName : string = (myform.value.clientFirstName);
    let lastName : string = myform.value.clientLastName;
    let password : string = myform.value.clientPassword;
    let passwordConfirmation   : string = myform.value.clientPasswordConfirmation;
    let email  : string = myform.value.clientEmail;
    let address  : string = myform.value.clientAddress;
    let description : string = myform.value.clientDescription;
    let job : string = myform.value.clientJob;
    let earning : string = myform.value.clientEarning;
    let phone : string = myform.value.clientTelephoneNumber;
    let atposition=email.indexOf("@");
    let dotposition=email.lastIndexOf(".");
    if (firstName==null || firstName=="" || lastName==null || lastName=="") {
      this._errorMessage ="First Name and Last Name can't be blank";
      this._invalidLogin =true;
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
      this._errorMessage ="Please enter a valid e-mail address ";
      this._invalidLogin =true;
    }
    else if(password.length<8) {
      this._errorMessage ="Password must be at least 8 characters long.";
      this._invalidLogin =true;
    }
    else if (password!=passwordConfirmation) {
      this._errorMessage ="password and confirmation password must be same!";
      this._invalidLogin =true;
      console.log(password);
      console.log(passwordConfirmation);
    }
    else if(address==null || address=="") {
      this.errorMessage ="Please enter your address";
      this.invalidLogin =true;
    }
    else if(this.selectedGender==null || this.selectedGender=="") {
      this.errorMessage ="Please enter your gender";
      this.invalidLogin =true;
    }
    else if(phone==null || phone=="") {
      this.errorMessage ="Please enter your phone";
      this.invalidLogin =true;
    }
    else if(this.selectedNationality==null || this.selectedNationality=="") {
      this.errorMessage ="Please enter your nationality";
      this.invalidLogin =true;
    }
    else if(job==null || job=="") {
      this.errorMessage ="Please enter your job";
      this.invalidLogin =true;
    }
    else if(earning==null || earning=="") {
      this.errorMessage ="Please enter your earning";
      this.invalidLogin =true;
    }
    else if(description==null || description=="") {
      this.errorMessage ="Please enter your description";
      this.invalidLogin =true;
    }
    else if (!this.terms){
      this._errorMessage ="Please read the Terms and Conditions";
      this._invalidLogin =true;
    }
    else {
      this._invalidLogin = false;
    }



  }
  createClient(myform) {
    this.checkForm(myform);
    if(!this.invalidLogin) {
      this.service.createClient(myform,this.selectedGender,this.selectedNationality).subscribe(
        response => {
          sessionStorage.setItem('username', myform.value.clientEmail);
          /*sessionStorage.setItem('password', password)*/
          sessionStorage.setItem('role', "client");
          sessionStorage.setItem('firstName', myform.value.clientFirstName);
          sessionStorage.setItem('lastName', myform.value.clientLastName);
          sessionStorage.setItem('address', myform.value.clientAddress);
          sessionStorage.setItem('description', myform.value.clientDescription);
          sessionStorage.setItem('earning', myform.value.clientEarning);
          sessionStorage.setItem('job', myform.value.clientJob);
          sessionStorage.setItem('rating', myform.value.clientRating);
          sessionStorage.setItem('sexe', this.selectedGender);
          sessionStorage.setItem('telephone_number', myform.value.clientTelephoneNumber);
          sessionStorage.setItem('nationality', this.selectedNationality);

          this.router.navigate(['newsfeed-client'])
          /*console.log(response);
          this.router.navigate(['clients']);*/
        }
      );
    }



  }

}
