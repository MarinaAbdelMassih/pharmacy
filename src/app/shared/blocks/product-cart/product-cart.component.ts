import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductCollection } from '../../../core/models/product-collection.model';
import { LocalStorage } from '../../../core/helpers/localStorage';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  faHeart = faHeart;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  @Input() collection: ProductCollection;
  @Input() title;
  constructor(
    private cdr: ChangeDetectorRef,
    public localStorage: LocalStorage
    
    ) { }

  ngOnInit(): void {}

  scroll(target, direction) {
    if (direction === 'left') {
      target.scrollLeft -= ((target.offsetWidth + 10) / 4);
    } else {
      target.scrollLeft += ((target.offsetWidth + 10) / 4);
    }
  }

  scrollListener() {
    this.cdr.detectChanges();
  }

}
