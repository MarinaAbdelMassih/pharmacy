import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BrandModel, BrandTransformer} from '../models/brand.model';
import {HttpClient} from '@angular/common/http';
import {ProductTransformer, Product} from '../models/product.model';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {brandsServiceConstants} from '../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private apiUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private brandAdapter: BrandTransformer,
    private productAdapter: ProductTransformer
  ) {
  }

  getAllBrands(): Observable<BrandModel> {
    return this.http.get(brandsServiceConstants.getAllBrands).pipe(
      map((data: any) => data.map(brand => this.brandAdapter.transform(brand))));
  }

  getBrandProducts(brandId): Observable<Product[]> {
    return this.http.get(brandsServiceConstants.getBrandProducts + (isNaN(brandId) ? 'slug' : 'id') + '=' + brandId + '')
      .pipe(map((data: any) => data.map(product => this.productAdapter.transform(product))));
  }

}
