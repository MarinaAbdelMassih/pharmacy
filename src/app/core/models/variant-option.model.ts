import {Injectable} from '@angular/core';
import {Transformer} from './transformer';

export class VariantOption {
  constructor(
    public  keyId: number,
    public  key: string,
    public  valueId: number,
    public  value: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class VariantOptionTransformer implements Transformer<VariantOption> {

  constructor() {
  }

  transform(item: any): VariantOption {
    return new VariantOption(
      item.key_id,
      item.key,
      item.value_id,
      item.value
    );
  }
}
