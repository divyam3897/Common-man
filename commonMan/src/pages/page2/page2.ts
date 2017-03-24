import { Component } from '@angular/core';
import { CartService } from '../../providers/cart-service';
import { IonicService } from '../../providers/ionic-service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ionicService: IonicService,public cartService: CartService ) {
    // If we navigated to this page, we will have an item available as a nav param

    this.selectedItem = navParams.get('Name');
    

    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.getData ();

    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
    
  }

  placeOrder (item) {
    this.cartService.placeItemInCart (item);
  };

  private getData ()
  {
    this.ionicService.getItemImages().subscribe (
      data => {
        this.items = data;

      },
      err => {
        console.log(err);
      },
    ); 
  }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(Page2, {
  //     item: item
  //   });
  // }
}
