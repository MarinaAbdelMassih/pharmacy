import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CartManager } from '../../../../../core/managers/cart.manager';
import { LocalStorage } from '../../../../../core/helpers/localStorage';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart ;

  constructor(
    private router: Router, 
    public cartManager: CartManager,
    public localStorage: LocalStorage
    ) { }

  ngOnInit(): void {
    this.cartManager.getCart();
  }

  goToCart() {
    if (this.cartManager.cartItems.value.length) {
      this.router.navigateByUrl('cart');
    }
  }

  onSearch(keyword) {
    this.router.navigateByUrl(`products/search/${keyword}`);
  }

}
