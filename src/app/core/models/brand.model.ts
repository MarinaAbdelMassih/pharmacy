import {Injectable} from '@angular/core';
import {Transformer} from './transformer';

export class BrandModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public slug: string,
    public logo: string,
    public coverImage: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BrandTransformer implements Transformer<BrandModel> {

  transform(item: any): BrandModel {
    return new BrandModel(
      item.id,
      item.name,
      item.description,
      item.slug,
      item.logo,
      item.cover_image
    );
  }
}
