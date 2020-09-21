import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Category, CategoryTransformer} from '../models/category.model';
import {Product, ProductTransformer} from '../models/product.model';
import {categoriesServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private apiUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private categoryAdapter: CategoryTransformer,
    private productAdapter: ProductTransformer
  ) {
  }

  getAllCategories(): Observable<Category> {
    return this.http.get(categoriesServiceConstants.getAllCategories).pipe(
      map(
        (data: any) => data.map
        (
          category => this.categoryAdapter.transform(category)
        )
      )
    );
  }

  getCategoryProducts(categoryId): Observable<Product[]> {
    return this.http.get(categoriesServiceConstants.getCategoryProducts + (isNaN(categoryId) ? 'slug' : 'id') + '=' + categoryId + '')
      .pipe(map((data: any) => data.map(product => this.productAdapter.transform(product))));
  }

}
