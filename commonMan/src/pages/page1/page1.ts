import { Component } from '@angular/core';
import { IonicService } from '../../providers/ionic-service';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { SearchPage } from '../search/search';
import { LoadingController,Loading } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  loading: Loading;
  data:any;

  constructor(public navCtrl: NavController, public ionicService: IonicService, public loadingCtrl: LoadingController) {
    
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
    console.log('hey');
    this.navCtrl.push(SearchPage);
  }

}
