import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
  /**
   * Save Language to LocalStorage
   * @param key 'en' || 'ar'
   */
  setLang(key: string) {
    localStorage.setItem('lang', key);
  }

  /**
   * Get Language from LocalStorage
   */
  getLang() {
    return localStorage.getItem('lang');
  }
}
