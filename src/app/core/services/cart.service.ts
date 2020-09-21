import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {cartServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getCart() {
    return this.http.get(cartServiceConstants.getCart);
  }

  public addToCart(data) {
    return this.http.post(cartServiceConstants.addToCart, data);
  }

  public getCartCalculations(data) {
    return this.http.post(cartServiceConstants.getCartCalculations, data);
  }


}
