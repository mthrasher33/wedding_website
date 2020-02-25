import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'assets/data/smartphone.json';
const imageRoot = 'assets/images/';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { }

  getSmartphone() {
    return this.http.get(localUrl);
  }

  getImagePath(file: String){
    return imageRoot + file;
  }

}
