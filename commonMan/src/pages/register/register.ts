import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page1 } from '../page1/page1';
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
	myForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
  	this.myForm = formBuilder.group({
	  	name : ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	  	username : ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	  	password : ['', Validators.compose([Validators.minLength(8),Validators.required])],
	  	email : ['', Validators.compose([Validators.required,Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')])],
	  	contact : ['', Validators.compose([Validators.minLength(10),Validators.pattern('^\\d+$'),Validators.required])],
	  	address : ['',Validators.compose([,Validators.required])]
	  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
  this.navCtrl.setRoot(Page1);
  }

  



}
