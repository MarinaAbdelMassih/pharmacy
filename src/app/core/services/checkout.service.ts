import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { checkoutServiceConstants } from '../constants/api.constants';
import { ProductCollection, ProductCollectionTransformer } from '../models/product-collection.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient, private productCollectionAdapter: ProductCollectionTransformer) {
  }

  activatePromocode(data) {
    return this.http.post<any>(checkoutServiceConstants.activatePromocode, data);
  }

  getProductsSuggestions(): Observable<ProductCollection[]> {
    return this.http
      .get(checkoutServiceConstants.getOrderSuggestions)
      .pipe(
        map((data: any) =>
          data.collection.map(product => this.productCollectionAdapter.transform(product))
        )
      );
  }

  checkout(data) {
    if (data.payment_method === 'CASH') {
      return this.http.post(checkoutServiceConstants.checkoutCash, data);
    } else {
      return this.http.post(checkoutServiceConstants.checkoutOnline, data);
    }
  }
}
