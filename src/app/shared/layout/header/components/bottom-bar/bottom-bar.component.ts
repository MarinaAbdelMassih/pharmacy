import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../../../../core/services/categories.service';
import { Category } from '../../../../../core/models/category.model';
import { LocalStorage } from '../../../../../core/helpers/localStorage';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  categories: Category;
  activeCategory: number;

  constructor(
    private categoriesService: CategoriesService, 
    private router: Router,
    public localStorage: LocalStorage
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  navigateToCategory(category) {
    this.router.navigateByUrl(`products/${category.slug}`, {
      state: { category }
    });
  }

}
