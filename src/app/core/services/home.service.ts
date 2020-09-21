import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HomeModel, HomeTransformer} from '../models/home.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductCollection, ProductCollectionTransformer} from '../models/product-collection.model';
import {ProductTransformer} from '../models/product.model';
import {homeServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(
    private http: HttpClient,
    private homeAdapter: HomeTransformer,
    private productCollectionAdapter: ProductCollectionTransformer,
    private product: ProductTransformer
  ) {
  }

  getHomeContent(): Observable<HomeModel> {
    return this.http.get(homeServiceConstants.getHomeContent).pipe(
      map((data: any) => this.homeAdapter.transform(data)));
  }

  getHomeCollections(): Observable<ProductCollection> {
    return this.http.get(homeServiceConstants.getHomeCollections).pipe(
      map((data: any) => data.map(collection => this.productCollectionAdapter.transform(collection))));
  }

  getRecentlyViewed() {
    return this.http.get(homeServiceConstants.getRecentlyViewed).pipe(
      map((data: any) => data.map(product => this.product.transform(product))));
  }
}
