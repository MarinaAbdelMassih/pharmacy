import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './products-details/product-details.component';
import { ItemDetailsComponent } from './products-details/item-details/item-details.component';
import { ProductTabsComponent } from './products-details/product-tabs/product-tabs.component';
import { RatingComponent } from './products-details/rating/rating.component';
import { ReviewItemComponent } from './products-details/review-item/review-item.component';
import { ReviewsComponent } from './products-details/reviews/reviews.component';
import { ImageViewerComponent } from './products-details/image-viewer/image-viewer.component';
import { RangeSliderComponent } from './products-list/range-slider/range-slider.component';
import { FilterComponent } from './products-list/filter/filter.component';
import { ProductsListHeaderComponent } from './products-list/products-list-header/products-list-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FilterDialogComponent } from './products-list/filter-dialog/filter-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ImageViewerComponent,
    ItemDetailsComponent,
    ProductTabsComponent,
    RatingComponent,
    ReviewItemComponent,
    ReviewsComponent,
    ProductTabsComponent,
    RangeSliderComponent,
    FilterComponent,
    ProductsListHeaderComponent,
    FilterDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    Ng5SliderModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedModule
  ]
})
export class ProductsModule { }
