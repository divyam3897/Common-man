import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cartItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  this.cartItems = this.navParams;
  console.log('cart',this.cartItems.data)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  paymentProcess (){
     let alert = this.alertCtrl.create({
      title: 'Thank you!',
      subTitle: 'Item will be shipped to you.',
      buttons: ['OK']
    });
    alert.present();
  }

}
