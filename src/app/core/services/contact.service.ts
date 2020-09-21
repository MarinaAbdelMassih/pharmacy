import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {contactsServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {
  }

  sendEmail(data) {
    return this.http.post(contactsServiceConstants.sendEmail, data);
  }
}
