import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { LoginPage } from '../login/login';

/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
 let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    this.http.get('http://localhost:8100/logout',{headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  login() {
  this.navCtrl.setRoot(LoginPage)
  }
}
