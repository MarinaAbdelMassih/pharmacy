import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

/**
 * A Guard for No-Authentication-needed routes
 *
 * @example '/login', '/register'
 *
 */
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  /**
   * Decide if a route can be activated
   * Route can be activated only if the user is NOT logged in (TOKEN exists && USER-TYPE = 'GUEST' ||
   *  TOKEN doesn't exist)
   * So if TOKEN exists and USER-TYPE === 'CUSTOMER' deactivate route and redirect to home
   */
  canActivate() {
    if (localStorage.getItem('TOKEN') && localStorage.getItem('USER-TYPE') === 'CUSTOMER') {
      /**
       * Otherwise redirect to Home page
       */
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
