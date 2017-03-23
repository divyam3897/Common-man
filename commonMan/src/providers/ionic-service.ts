import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



/*
  Generated class for the IonicService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IonicService {

  constructor(public http: Http) {
    console.log('Hello IonicService Provider');
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  
    headers.append('x-apikey', '58d44c5a81f530cf439b30af');
  }
  
  getItemImages()
  {
    let headers = new Headers();
    headers.append('x-apikey', '58d44c5a81f530cf439b30af');
    var url = 'https://test-72ec.restdb.io/rest/items';
    var response = this.http.get(url, { headers: headers }).map(res => res.json());
    return response;
  
  }
 
  getCatImages ()
  {
    let headers = new Headers();
    headers.append('x-apikey', '58d4512b81f530cf439b30b1');
    var url = 'https://test-72ec.restdb.io/rest/categories';
    var response = this.http.get(url, { headers: headers }).map(res => res.json());
    return response;
  
  }
}
