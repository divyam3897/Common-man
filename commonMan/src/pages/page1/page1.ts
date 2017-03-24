import { Component } from '@angular/core';
import { IonicService } from '../../providers/ionic-service';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  data:any;

  constructor(public navCtrl: NavController, public ionicService: IonicService) {
    
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

  private getData ()
  {
    this.ionicService.getCatImages().subscribe (
      data => {
        this.data = data;
      },
      err => {
        console.log(err);
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
