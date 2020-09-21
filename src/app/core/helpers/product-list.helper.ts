import {Injectable} from '@angular/core';

declare var $: any;

/**
 * Template methods for product list screens
 */
@Injectable({
  providedIn: 'root'
})
export class ProductListHelper {
  productWraper = $('.product-wrapper-grid');
  public animation: any;   // Animation
  public sortByOrder = '';   // sorting

  constructor() {
  }

  /**
   * Sets the grid view to Two items per row
   */
  public twoCol() {
    if (this.productWraper.hasClass('list-view')) {
    } else {
      this.productWraper.children().children().children().removeClass();
      this.productWraper.children().children().children().addClass('col-lg-6');
    }
  }

  /**
   * Sets the grid view to Three items per row
   */
  public threeCol() {
    if (this.productWraper.hasClass('list-view')) {
    } else {
      this.productWraper.children().children().children().removeClass();
      this.productWraper.children().children().children().addClass('col-lg-4');
    }
  }

  /**
   * Sets the grid view to Four items per row
   */
  public fourCol() {
    if (this.productWraper.hasClass('list-view')) {
    } else {
      this.productWraper.children().children().children().removeClass();
      this.productWraper.children().children().children().addClass('col-lg-3');
    }
  }

  /**
   * Sets the grid view to Six items per row
   */
  public sixCol() {
    if (this.productWraper.hasClass('list-view')) {
    } else {
      this.productWraper.children().children().children().removeClass();
      this.productWraper.children().children().children().addClass('col-lg-2');
    }
  }

  /**
   * Animation Effect fadeIn
   */
  public fadeIn() {
    this.animation = 'fadeIn';
  }

  /**
   * Animation Effect fadeOut
   */
  public fadeOut() {
    this.animation = 'fadeOut';
  }

  /**
   * Sorting type ASC / DESC / A-Z / Z-A etc
   */
  public onChangeSorting(val) {
    this.sortByOrder = val;
    this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }
}
