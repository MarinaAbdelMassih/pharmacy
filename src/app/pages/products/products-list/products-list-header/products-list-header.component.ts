import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list-header',
  templateUrl: './products-list-header.component.html',
  styleUrls: ['./products-list-header.component.scss']
})
export class ProductsListHeaderComponent implements OnInit {

  values: any = [
    'Price low first',
    'Price high first',
    'Name A-Z',
    'Name Z-A'
  ];
  currentValue = 'Sort By';
  @Output() sortChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  filterChanged(e) {
    this.currentValue = `Sort by: ${e}`;
    this.sortChanged.emit(e);
  }

}
