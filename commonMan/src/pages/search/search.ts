import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
	items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ionicService: IonicService) {
  	this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  initializeItems() {
  	this.ionicService.getItemImages().subscribe (
      data => {
        this.items = data;

      },
      err => {
        console.log(err);
      },
    ); 
  }


  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.ItemName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
