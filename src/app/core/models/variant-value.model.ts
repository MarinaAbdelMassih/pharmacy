import {Injectable} from '@angular/core';
import {Transformer} from './transformer';

export class VariantValue {
  constructor(
    public id: string,
    public value: string,
    public code: string,
    public pattern: string,
  ) {
  }
}
@Injectable({
  providedIn: 'root'
})

export class VariantValueTransformer implements Transformer<VariantValue> {

  transform(item: any): VariantValue {
    return new VariantValue(
      item.value_id,
      item.value,
      item.code,
      item.image_url
    );
  }
}
