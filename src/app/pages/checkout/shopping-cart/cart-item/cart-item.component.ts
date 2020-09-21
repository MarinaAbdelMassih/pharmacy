import { Component, OnInit, Input } from '@angular/core';
import { CartManager } from '../../../../core/managers/cart.manager';
import { LocalStorage } from '../../../../core/helpers/localStorage';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item;

  constructor(
    private cartManager: CartManager,
    public localStorage: LocalStorage
    ) { }

  ngOnInit(): void {}

  changeItemQty(qty) {
    this.cartManager.modifyItemQty(this.item, qty);
  }

  deleteItem(item) {
    this.cartManager.removeCartItem(item);
  }

}
