import { Component } from '@angular/core';
import { CartService } from '../../providers/cart-service';
import { IonicService } from '../../providers/ionic-service';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { LoadingController,Loading } from 'ionic-angular';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  loading: Loading;
  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ionicService: IonicService,public alertCtrl: AlertController,public loadingCtrl: LoadingController, public cartService: CartService,public http: Http) {
    this.presentLoading();
    this.selectedItem = navParams.get('Name');
    this.getData ();
  }

  placeOrder (item) {
    this.cartService.placeItemInCart (item);
  };

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    this.loading.present();
  }
  private getData ()
  {
    this.ionicService.getItemImages().subscribe (
      data => {
        this.items = data;
        this.loading.dismiss();

      },
      err => {
        console.log(err);
        this.loading.dismiss();
      },
    ); 
  }

  subscribe(item,name) {
    let alert = this.alertCtrl.create();
    alert.setTitle(name);
    alert.addInput({
      type: 'radio',
      label: 'Everyday',
      value: 'E',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Alternate',
      value: 'A'
    });

    alert.addInput({
      type: 'radio',
      label: 'Weekly',
      value: 'W'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);    
      }
    });

    alert.present().then(() => {

    });
  }

  addItem(item:any) {
    var value = {
      'item': item,
    }
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    console.log(value)
    this.http.post('http://localhost:8100/add',value, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log("hello");
    });
    let alert = this.alertCtrl.create({
      title: 'Thank you!',
      subTitle: 'Item has been added to your cart.',
      buttons: ['OK']
    });
    alert.present();
  }
}
