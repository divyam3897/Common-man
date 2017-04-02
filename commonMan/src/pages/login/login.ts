import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Page1 } from '../page1/page1';
import { UserService } from '../../providers/user';
import {Http, Headers} from '@angular/http';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userCredential: any;
  password: any;
  incorrectLogin: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public toastCtrl: ToastController,public http:Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentToast (){
    let toast = this.toastCtrl.create ({
      message : 'Incorrect Login',
      duration : 1000,
      position : 'bottom'
    });

    toast.present ();
  }


  registerUser() {
  this.navCtrl.push(RegisterPage);
  }

  login(value:any) {
    console.clear();
    value = JSON.stringify(value)
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8100/login',value, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      if(data['status'] == "LoggedIn")
        this.navCtrl.setRoot(Page1);
      else
        this.presentToast();
    });
  }

  }

