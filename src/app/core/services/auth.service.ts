import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {authServiceConstants} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
  ) {
  }

  register(data) {
    return this.http.post(authServiceConstants.register, data);
  }

  login(data) {
    return this.http.post(authServiceConstants.login, data);
  }

  loginWithFacebook(data) {
    return this.http.post(authServiceConstants.loginWithFacebook, data);
  }

  forgetPassword(data) {
    return this.http.post(authServiceConstants.forgetPassword, data);
  }

  createGuestUser() {
    return this.http.get(authServiceConstants.createGuestUser);
  }
}
