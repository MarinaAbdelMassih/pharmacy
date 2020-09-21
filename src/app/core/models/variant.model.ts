import {Injectable} from '@angular/core';
import {Transformer} from './transformer';
import {VariantValue, VariantValueTransformer} from './variant-value.model';

export class Variant {
  constructor(
    public id: string,
    public key: string,
    public name: string,
    public values: VariantValue[]
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class VariantTransformer implements Transformer<Variant> {

  constructor(private variantValueTransformer: VariantValueTransformer) {
  }

  transform(item: any): Variant {
    const values = item.values ? item.values.map(data => this.variantValueTransformer.transform(data)) : [];
    return new Variant(
      item.id,
      item.key,
      item.name,
      values
    );
  }
}


