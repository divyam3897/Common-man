import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {
    cartItems: any[];

  constructor(public http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('x-apikey', '58d44c5a81f530cf439b30af');
  }

  placeItemInCart (item){
    this.cartItems.push (item);
  };

  paymenyCheckout ()
  {
      
  }


}
