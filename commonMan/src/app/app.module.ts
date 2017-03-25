import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { RegisterPage } from '../pages/register/register';
import { HistoryPage } from '../pages/history/history';
import { IonicService } from '../providers/ionic-service';
import { UserService } from '../providers/user';
//import { CartService } from '../providers/cart-service'
//import { AuthConfig, AuthHttp } from 'angular2-jwt';
//import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

/*const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '4a4e38ad',
  },
    'push': {
    'sender_id': '420972594685',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};
*/

import { ProfilePage } from '../pages/profile/profile';

//import { Http } from '@angular/http';
// import { Storage } from '@ionic/storage';

// let storage: Storage = new Storage();

// export function getAuthHttp(http) {
//   return new AuthHttp(new AuthConfig({
//     globalHeaders: [{'Accept': 'application/json'}],
//     tokenGetter: (() => storage.get('id_token'))
//   }), http);
// }

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    ProfilePage,
    SearchPage,
    HistoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    ProfilePage,
    SearchPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    //AuthService,
    // {
    //   provide: AuthHttp,
    //   useFactory: getAuthHttp,
    //   deps: [Http]
    // }
    
  ]
})
export class AppModule {}
  
