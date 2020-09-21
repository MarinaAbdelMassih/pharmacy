import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from './core/helpers/localStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    translate: TranslateService,
    private localStorage: LocalStorage
  ) {
    if (this.localStorage.getLang() === 'ar') {
      this.setStyle('ar');
      translate.setDefaultLang('ar');
    } else {
      this.setStyle('en');
      translate.setDefaultLang('en');
    }

    // on change language in header
    translate.onLangChange.subscribe((event) => {
      location.reload();
      this.setStyle(event.lang === 'ar' ? 'ar' : 'en');
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  setStyle(lang) {
    this.localStorage.setLang(lang);
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    document.getElementsByTagName('body')[0].setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementsByTagName('body')[0].setAttribute('class', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
