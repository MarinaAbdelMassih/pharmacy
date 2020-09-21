import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faApple = faApple;
  faGooglePlay = faGooglePlay;
  faInstagram = faInstagram;
  categories: Category;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
