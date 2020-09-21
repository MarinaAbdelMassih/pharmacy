import {Injectable} from '@angular/core';
import {Transformer} from './transformer';

export class SliderModel {
  constructor(
    public type: string,
    public image: string,
    public imageUrl: string,
    public title: string,
    public subtitle: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class SliderTransformer implements Transformer<SliderModel> {

  transform(item: any): SliderModel {
    return new SliderModel(
      item.type,
      item.mainImg,
      item.mainImgUrl,
      item.mainText,
      item.lowerText
    );
  }
}
