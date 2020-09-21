import { Component, OnInit, Input } from '@angular/core';
import { LocalStorage } from '../../../../core/helpers/localStorage';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit {

  @Input() product;
  // buttons: Array<string> = [
  //   'Description',
  //   'Ingredients',
  //   'Safety Warning',
  //   'Reviews'
  // ];
  buttons: Array<string> = [this.localStorage.getLang() === 'en' ? 'Description' : 'الوصف'];
  activeIndex = 0;

  constructor(
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {}

  changeTab(index, target) {
    this.activeIndex = index;
    target.scrollLeft = index * target.offsetWidth;
  }

}
