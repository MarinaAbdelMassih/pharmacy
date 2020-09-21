import {Injectable} from '@angular/core';
import {Transformer} from './transformer';
import {Product, ProductTransformer} from './product.model';

export class ProductCollection {
  constructor(
    public id: number,
    public name: string,
    public items: Product[]
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductCollectionTransformer implements Transformer<ProductCollection> {

  constructor(private productAdapter: ProductTransformer) {
  }

  transform(collection: any): ProductCollection {
    const items = collection.items.map(data => this.productAdapter.transform(data));
    return new ProductCollection(
      collection.id,
      collection.name,
      items
    );
  }
}
