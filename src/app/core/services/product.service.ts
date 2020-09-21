import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product, ProductTransformer} from '../models/product.model';
import {productServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private productTransformer: ProductTransformer
  ) {
  }

  getProduct(productId): Observable<Product> {
    return this.http
      .get(
        productServiceConstants.getProduct +
        (isNaN(productId) ? 'slug' : 'id') +
        '=' +
        productId
      )
      .pipe(map((data: any) => this.productTransformer.transform(data)));
  }

  getRelatedProducts(productId): Observable<Product[]> {
    return this.http
      .get(
        productServiceConstants.getRelatedProducts +
        (isNaN(productId) ? 'slug' : 'id') +
        '=' +
        productId
      )
      .pipe(
        map((data: any) =>
          data.map(product => this.productTransformer.transform(product))
        )
      );
  }

  searchProducts(text) {
    return this.http
      .get(productServiceConstants.searchProducts + text)
      .pipe(
        map((data: any) =>
          data.map(product => this.productTransformer.transform(product))
        )
      );
  }
}
