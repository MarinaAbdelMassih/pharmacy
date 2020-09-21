import { Component, OnInit } from '@angular/core';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;
  public relatedProducts: Array<Product>;

  constructor(
    private wishlistManager: WishlistManager,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getRelatedProducts();
  }

  getProduct() {
    this.productService.getProduct(this.activatedRoute.snapshot.url[1].path).subscribe((res) => {
      this.product = res;
    });
  }

  getRelatedProducts() {
    this.productService.getRelatedProducts(this.activatedRoute.snapshot.url[1].path).subscribe((res) => {
      this.relatedProducts = res;
    });
  }

}
