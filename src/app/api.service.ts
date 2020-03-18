import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'assets/data/smartphone.json';
const homeHeroImageUrl = 'assets/data/homeHeroImage.json';
const comboTilesUrl = 'assets/data/comboTiles.json';

const imageRoot = 'assets/images/';


@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { }

  getSmartphone() {
    return this.http.get(localUrl);
  }

  getHomeHeroImageUrl() {
    return this.http.get(homeHeroImageUrl);
  }

  getImagePath(file: String){
    return imageRoot + file;
  }
  
  getComboTiles() {
    return this.http.get(comboTilesUrl);
  }

  getFooterLinks() {
    return this.http.get(comboTilesUrl);
  }

  getContent(contentKey: String){
    return this.http.get('assets/data/' + contentKey + 'Content.json');
  }

}
