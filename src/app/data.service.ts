import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  Search(){
    return this.http.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v3/products/search?query=laptop&storeId=&zipCode=&facetsOnly=&platform=&lang=en')
  }

  filterProduct(id: string){
    return this.http.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/'+ id + '?lang=en')
  }

}
