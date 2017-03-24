import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IonicService {

  constructor(public http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('x-apikey', '58d44c5a81f530cf439b30af');
  }
  
  postUserDetails(userInfo)
  {
    let headers = new Headers();
    headers.append('x-apikey', '58d44c5a81f530cf439b30af');
    var url = 'https://test-72ec.restdb.io/rest/users';
    var response = this.http.post(url, { headers: headers }).map(res => res.json());
    return response;
  
  }

}
