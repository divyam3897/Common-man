import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CartService } from '../../providers/cart-service';

/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cartItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartService, public alertCtrl: AlertController) {
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
