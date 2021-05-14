import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-client-newsfeed',
  templateUrl: './client-newsfeed.component.html',
  styleUrls: ['./client-newsfeed.component.css']
})
export class ClientNewsfeedComponent implements OnInit {

  //image details
  selectedFile: File;

  Image='https://bootdey.com/img/Content/avatar/avatar7.png';

  base64Data: any;

  freelancer: any;

  message: string;
  //session variables
  imageName: any;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  description: string;
  earning: any;
  inscription_date: string;
  job: any;
  rating: any;
  sexe: any;
  telephone_number: any;
  nationality: any;
  constructor(private httpClient: HttpClient) {
    this.getImage();
  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("username");
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
    this.address=sessionStorage.getItem('address');
    this.description=sessionStorage.getItem('description');
    this.earning=sessionStorage.getItem('earning');
    this.inscription_date=sessionStorage.getItem('inscription_date');
    this.job=sessionStorage.getItem('job');
    this.rating=sessionStorage.getItem('rating');
    this.sexe=sessionStorage.getItem('sexe');
    this.telephone_number=sessionStorage.getItem('telephone_number');
    this.nationality=sessionStorage.getItem('nationality');
  }

  onChange(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.onUpload();
  }

  onUpload() {
    console.log("upload");
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://127.0.0.1:8070/clients/saveImageByEmail/'+sessionStorage.getItem("username"), uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
          this.getImage();
        }
      );
  }
  //Gets called when the user clicks on retieve image button to get the image from back end
  45
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://127.0.0.1:8070/clients/getImageByEmail/'+sessionStorage.getItem("username"))

      .subscribe(

        res => {

          this.freelancer = res;
          this.base64Data = this.freelancer.image;
          this.Image = 'data:image/jpeg;base64,' + this.base64Data;

          this.email=this.freelancer.email;
          this.firstName=this.freelancer.firstName;
          this.lastName=this.freelancer.lastName;
          this.address=this.freelancer.address;
          this.description=this.freelancer.description;
          this.earning=this.freelancer.earning;
          this.inscription_date=this.freelancer.inscriptionDate;
          this.job=this.freelancer.job;
          this.rating=this.freelancer.rating;
          this.sexe=this.freelancer.rating;
          this.telephone_number=this.freelancer.telephoneNumber;
          this.nationality=this.freelancer.nationality;

          sessionStorage.setItem("username",this.email);
          sessionStorage.setItem("firstName",this.firstName);
          sessionStorage.setItem("lastName",this.lastName);
          sessionStorage.setItem('address',this.address);
          sessionStorage.setItem('description',this.description);
          sessionStorage.setItem('earning',this.earning);
          sessionStorage.setItem('inscription_date', this.inscription_date);
          sessionStorage.setItem('job',this.job);
          sessionStorage.setItem('rating',this.rating);
          sessionStorage.setItem('sexe',this.sexe);
          sessionStorage.setItem('telephone_number', this.telephone_number);
          sessionStorage.setItem('nationality',this.nationality);
        }
      );

  }

  //pdf content
  public docDefinition = {
    /*header: 'Resume',*/
    content: [
      {
        text: 'Resume',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: sessionStorage.getItem("firstName")+" "+ sessionStorage.getItem("lastName"),
        fontSize: 20,
        bold: true,
        alignment: 'center',
        decoration: 'underline',
        color: 'skyblue'
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        columns: [
          [
            {
              text: sessionStorage.getItem("firstName")+" "+ sessionStorage.getItem("lastName"),
              bold: true
            },
            { text: sessionStorage.getItem("address")},
            { text: sessionStorage.getItem("username") },
            { text: sessionStorage.getItem("telephone_number") }
          ],
          [
            {
              text: `Date: ${new Date().toLocaleString()}`,
              alignment: 'right'
            },
            {
              text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
              alignment: 'right'
            }
          ]
        ]
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        ul: [
          sessionStorage.getItem("description"),

        ],
      },
      {
        text: 'Skills Details',
        style: 'sectionHeader'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            ['Language', 'skills', 'education', 'date'],
            ['French', 'Java', 'ensi', '19/05/2020'],
            ['english', 'c++', 'ensi', '29/05/2020'],
            ['arabic', 'linux', 'ensi', '29/05/2021'],

          ]
        }
      },
      {
        columns: [
          [{ qr: "salem", fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true }],
        ]
      },

    ],
    styles: {
      sectionHeader: {
        bold: true,
        decoration: 'underline',
        fontSize: 14,
        margin: [0, 15, 0, 15]
      }
    }
  };
  //create and open pdf in new window
  onOpen() {

    pdfMake.createPdf(this.docDefinition).open();

  }
  //create and print pdf
  onPrint() {

    pdfMake.createPdf(this.docDefinition).print();
  }
  //create and download pdf
  onDownload() {

    pdfMake.createPdf(this.docDefinition).download();
  }
}
