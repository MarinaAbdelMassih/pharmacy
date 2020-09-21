import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {configurationsServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getDistrictsTree() {
    return this.http.get(configurationsServiceConstants.getDistrictsTree);
  }

  getTimeSections() {
    return this.http.get(configurationsServiceConstants.getTimeSections);
  }

  getShippingNote() {
    return this.http.get(configurationsServiceConstants.getShippingNote);
  }

}
