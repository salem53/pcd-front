import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FlaskServiceService {
  urlFlask = 'http://127.0.0.1:5000/';
  constructor(private Http: HttpClient) { }
  getHelloWorld()  {
    return this.Http.get(this.urlFlask);
  }
}
