import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { CategoriesService } from '../../../../../core/services/categories.service';
import { faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthManager } from '../../../../../core/managers/auth.manager';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from '../../../../../core/helpers/localStorage';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  categories;
  activeCatgory;
  faCaretDown = faCaretDown;
  faShoppingCart = faShoppingCart;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    public authManager: AuthManager,
    private translate: TranslateService,
    public localStorage: LocalStorage
    ) { }

  ngOnInit(): void {
    $('.menu-toggle').on('click', () => {
      $('.navbar-collapse').removeClass('show');
    });
    this.getCategories();
  }

  goToCart() {
    this.router.navigateByUrl('cart');
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  showsubcategories(event, category) {
    event.stopPropagation();
    if (this.activeCatgory === category.id) {
      this.activeCatgory = -1;
    } else {
      this.activeCatgory = category.id;
    }
  }

  collapseNavbar() {
    $('.navbar-collapse').removeClass('show');
  }

  language(language: string) {
    this.translate.use(language);
    this.localStorage.setLang(language);
  }

}
