import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit, OnChanges {

  @Input() product: Product;
  currentImage;
  faHeart = faHeart;

  constructor(private wishlistManager: WishlistManager) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes.product.currentValue) {
      this.currentImage = changes.product.currentValue.images[0];
    }
  }

  selectImage(img) {
    this.currentImage = img;
  }

  toggleFavorite() {
    if (this.product.favourite) {
      this.wishlistManager.removeFromWishlist(this.product);
    } else {
      this.wishlistManager.addToWishlist(this.product);
    }
  }

}
