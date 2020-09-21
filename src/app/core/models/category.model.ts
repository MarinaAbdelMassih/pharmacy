import {Injectable} from '@angular/core';
import {Transformer} from './transformer';

export class Category {
  constructor(
    public id: number,
    public name: string,
    public slug: string,
    public parentId: number,
    public hasSubCategories: boolean,
    public subCategories: Category[],
    public images: string[],
    public subCategoriesCount: number
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoryTransformer implements Transformer<Category> {

  transform(item: any): Category {
    const subCategories = item.sub_categories ? item.sub_categories.map(subCategory => this.transform(subCategory)) : [];
    return new Category(
      item.id,
      item.name,
      item.slug,
      item.parent_item_group,
      item.hasSubCategories,
      subCategories,
      item.images,
      item.sub_categories.length
    );
  }
}
