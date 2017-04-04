import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  subscribedItems:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.subscribedItems = this.navParams;
  console.log('cart',this.subscribedItems.data)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
