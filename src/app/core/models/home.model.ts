import {Injectable} from '@angular/core';
import {Transformer} from './transformer';
import {SliderModel, SliderTransformer} from './slider.model';
import {BrandModel, BrandTransformer} from './brand.model';

export class HomeModel {
  constructor(
    public slider: SliderModel[],
    public brands: BrandModel[],
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HomeTransformer implements Transformer<HomeModel> {

  constructor(private sliderTransformer: SliderTransformer, private brandTransformer: BrandTransformer) {
  }

  transform(item: any): HomeModel {
    const slider = item.slider.map(data => this.sliderTransformer.transform(data));
    const brands = item.brands.map(data => this.brandTransformer.transform(data));
    return new HomeModel(
      slider,
      brands
    );
  }
}
