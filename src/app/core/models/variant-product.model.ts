import {Injectable} from '@angular/core';
import {Transformer} from './transformer';
import {VariantOption, VariantOptionTransformer} from './variant-option.model';

export class VariantProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public images: string[],
    public stockQty: number,
    public price: number,
    public discount,
    public variantOption: VariantOption[],
    public variantCode: string[],
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class VariantProductTransformer implements Transformer<VariantProduct> {

  constructor(private variantOptionTransformer: VariantOptionTransformer) {
  }

  transform(item: any): VariantProduct {
    const variantOptions = item.variant_option.map(data => this.variantOptionTransformer.transform(data));

    return new VariantProduct(
      item.id,
      item.name,
      item.description,
      item.images,
      item.stock_qty,
      item.price,
      item.discount,
      variantOptions,
      item.variant_code
    );
  }
}
