import { Component, OnInit, OnDestroy } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { BrandsService } from 'src/app/core/services/brands.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  faFilter = faFilter;
  currentCategory: string;
  products: Array<Product>;
  navigationSubscription;
  noResults = false;
  searchPage: boolean;
  brandsPage: boolean;

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService,
    private brandsService: BrandsService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchPage = this.router.url.includes('search');
    this.brandsPage = this.router.url.includes('brand');
    if (this.searchPage) {
      this.searchProducts();
    } else if (this.brandsPage) {
      this.getBrandProducts();
    } else {
      this.getProducts();
    }
    this.navigationSubscription = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.searchPage) {
        this.searchProducts();
      } else if (this.brandsPage) {
        this.getBrandProducts();
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.categoriesService.getCategoryProducts(this.activatedRoute.snapshot.url[1].path).subscribe((res) => {
      this.products = res;
    });
    this.currentCategory = window.history.state.category?.name || 'Products';
  }

  getBrandProducts() {
    this.brandsService.getBrandProducts(this.activatedRoute.snapshot.url[2].path).subscribe((res) => {
      this.products = res;
      if (!this.products || this.products.length === 0) {
        this.noResults = true;
      }
    });
    this.currentCategory = window.history.state.brand?.name || 'Brand';
  }

  searchProducts() {
    this.products = [];
    this.currentCategory = 'Search';
    this.productService.searchProducts(this.activatedRoute.snapshot.url[2].path).subscribe((res) => {
      this.products = res;
      if (res.products?.length === 0 || !this.products || this.products.length === 0) {
        this.noResults = true;
      }
    });
  }

  openFilterDialog() {
    this.dialog.open(FilterDialogComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw'
    });
  }

  sortProducts(sort) {
    if (sort === 'Price high first') {
      this.products.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    } else if (sort === 'Price low first') {
      this.products.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (sort === 'Name A-Z') {
      this.products.sort((a, b) =>
        (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 :
          ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
      );
    } else if (sort === 'Name Z-A') {
      this.products.sort((a, b) =>
        (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 :
          ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0)
      );
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
