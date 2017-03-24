import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Page1 } from '../page1/page1';
import { UserService } from '../../providers/user';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public toastCtrl: ToastController) {}

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

  authenticateUser (){

    var registeredUsers: any;
    this.userService.getUserProfiles ().subscribe (
      data => {
        registeredUsers = data;
      },
      err => {
        console.log(err);
        this.incorrectLogin = true;
      },
    );

    if (!this.incorrectLogin)
    {
      console.log (this.userCredential);
      console.log (this.password);
      for (let userObj of registeredUsers) {
        console.log ("-"+userObj.email);
        console.log ("-"+userObj.pwd);
        if (this.userCredential == userObj.name || this.userCredential == userObj.email)
          {
            if(this.password == userObj.pwd)
            {
              this.navCtrl.push(Page1);
              return;
            }
          }
      }
    }
    this.userCredential = "";
    this.password = "";
    this.presentToast ();
  };

  registerUser() {
  this.navCtrl.push(RegisterPage);
  }

  login() {
    
  }

}
