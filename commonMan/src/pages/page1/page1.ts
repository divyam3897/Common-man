import { Component } from '@angular/core';
import { IonicService } from '../../providers/ionic-service';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { LoadingController,Loading } from 'ionic-angular';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  loading: Loading;
  data:any;

  constructor(public navCtrl: NavController, public ionicService: IonicService, public loadingCtrl: LoadingController,public http:Http) {
    
    this.presentLoading();
    this.getData ();
    
//     [ {
// image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg',
// name: 'Fruits'
//     },
//     {
//     image: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
//     name: 'Vegetables'
//     }
//     ]
  }
 presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    this.loading.present();
}

  private getData ()
  {
    this.ionicService.getCatImages().subscribe (
      data => {
        this.data = data;
        this.loading.dismiss();
      },
      err => {
        console.log(err);
        this.loading.dismiss();
      },
    ); 
  }

  itemTapped(item)
  {
    this.navCtrl.push(Page2, item);
  }

  searchTapped()
  {
    this.navCtrl.push(SearchPage);
  }

  cartTapped()
  {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    var response = this.http.get('http://localhost:8100/cart', { headers: headers })
    .map(res => res.json())
    .subscribe(data => {
      this.navCtrl.push(CartPage,data)
      console.log(data)
    });
    console.log(response);
  }
}
