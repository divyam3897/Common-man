import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(public http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('x-apikey', '58d44c5a81f530cf439b30af');
  }
  
  postUserDetails (userInfo)
  {
    var userProfile = {
      "email" : userInfo.email,
      "name" : userInfo.name,
      "picture" : userInfo.picture
    };
    console.log ("obj " + userProfile);
    let headers = new Headers();
    headers.append('x-apikey', '58d4d9a881f530cf439b30bf58d4d9a881f530cf439b30bf');
    var url = 'https://test-72ec.restdb.io/rest/userProfiles';
    var response = this.http.post(url, JSON.stringify (userProfile) , { headers: headers }).map(res => res.json());
    console.log ("res " + response);
    return response;
  
  }

}
