import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { BrandsService } from 'src/app/core/services/brands.service';
import { BrandModel } from 'src/app/core/models/brand.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brandsArr: BrandModel;

  constructor(private brandsService: BrandsService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getAllBrands().subscribe(res => {
      this.brandsArr = res;
    });
  }

}
