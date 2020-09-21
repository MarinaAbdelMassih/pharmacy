import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { HomeModel } from 'src/app/core/models/home.model';
import { SliderModel } from 'src/app/core/models/slider.model';
import { ProductCollection } from 'src/app/core/models/product-collection.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  slider: SliderModel[];
  collections: ProductCollection;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomeContent();
    this.getHomeCollection();
  }

  getHomeContent() {
    this.homeService.getHomeContent().subscribe((response: HomeModel) => {
      this.slider = response.slider;
    });
  }

  getHomeCollection() {
    this.homeService.getHomeCollections().subscribe((response: ProductCollection) => {
      this.collections = response;
    });
  }

}
