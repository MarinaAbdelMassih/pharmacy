import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {searchServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = environment.baseUrl;
  public searchKey: string;

  constructor(private http: HttpClient) {
  }

  search(terms: Observable<string>) {
    if (terms) {
      return terms.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.searchEntries(term))
      );
    }
  }

  searchEntries(term) {
    this.searchKey = term;
    return this.http.get(searchServiceConstants.searchEntries + term);
  }
}
