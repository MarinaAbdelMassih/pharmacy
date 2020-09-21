import {Injectable} from '@angular/core';
import {Transformer} from './transformer';
import {Variant, VariantTransformer} from './variant.model';
import {VariantProduct, VariantProductTransformer} from './variant-product.model';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public slug: string,
    public description: string,
    public favourite: boolean,
    public images: string[],
    public sizeChart: string[],
    public variants: Variant[],
    public variantProducts: VariantProduct[],
    public price: number,
    public discountedPrice: number,
    public discount: string,
    public qty: number
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductTransformer implements Transformer<Product> {

  constructor(private variantTransformer: VariantTransformer, private variantProductTransformer: VariantProductTransformer) {
  }

  transform(item: any): Product {
    const variants = item.variants ? item.variants.map(data => this.variantTransformer.transform(data)) : [];
    const variantProducts = item.variants_products ? item.variants_products.map(data => this.variantProductTransformer.transform(data)) : [];
    return new Product(
      item.id,
      item.name,
      item.slug,
      item.description,
      item.favourite,
      item.images,
      item.chart_images,
      variants,
      variantProducts,
      item.standard_rate,
      item.discount?.discounted_rate,
      item.discount?.discount_tag,
      item.stock_qty
    );
  }
}
