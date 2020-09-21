import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent implements OnInit {

  activeCategoryIndex: number;
  faChevronRight = faChevronRight;
  @Input() categories: Category;
  @Output() hideMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  viewCategory() {
    this.hideMenu.emit();
  }

}
