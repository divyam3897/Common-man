import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import {Http, Headers} from '@angular/http';
/*
   Generated class for the Register page.

   See http://ionicframework.com/docs/v2/components/#pnavigation for more info on
   Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.navCtrl.setRoot(Page1);
  }

  details(value:any) {
    console.clear();
    console.log(value);
    value = JSON.stringify(value)
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.http.post('http://localhost:8100/api', value , {headers: headers})
    .subscribe(
      data => console.log('Received:' + data),
        err => console.log(err),
        () => console.log('Call Complete')
    );
    this.navCtrl.setRoot(Page1);
  }
}
