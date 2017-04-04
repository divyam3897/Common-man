import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page1 } from '../pages/page1/page1';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import {Http, Headers} from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public http: Http) { // , public auth: AuthService) {
  //  this.initializeApp();
   console.clear();
 let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    this.http.get('http://localhost:8100/loggedIn',{headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      if(data['status'] == "LoggedIn")
        this.rootPage = Page1;
      else
        this.rootPage = LoginPage;
    });
   // used for an example of ngFor and navigation
    this.initializeApp();
    this.pages = [
      { title: 'Market', component: Page1, icon: 'basket' },
      { title: 'Profile', component: ProfilePage, icon: 'contact'},
      { title: 'Logout', component: LogoutPage, icon: 'log-out'}
     ];
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
