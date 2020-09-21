import { Component, OnInit } from '@angular/core';
import { ProductCollection } from 'src/app/core/models/product-collection.model';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { AuthManager } from 'src/app/core/managers/auth.manager';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  collections: ProductCollection[];

  constructor(
    private checkoutService: CheckoutService,
    public authManager: AuthManager
    ) { }

  ngOnInit(): void {
    if (this.authManager.getUserType() === 'CUSTOMER') {
      this.checkoutService.getProductsSuggestions().subscribe(res => { this.collections = res; });
    }
  }

}
