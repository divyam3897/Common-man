import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import {Http, Headers} from '@angular/http';

//import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  isLoggedIn: boolean;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  
    // TODO: Check if the user is logged In or Not and set the variable
    this.isLoggedIn = true;

    this.user = {
      'Name': 'NVS Abhilash',
      'Image': 'https://avatars3.githubusercontent.com/u/15072945?v=3&s=400'

    }
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  history() {
  this.navCtrl.push(HistoryPage);
  }

  showSubscriptions() {
      let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    this.http.get('http://localhost:8100/profile/subscribe', { headers: headers })
    .map(res => res.json())
    .subscribe(data => {
      console.log(data)
      this.navCtrl.push(HistoryPage,data)
    });
  }


}
