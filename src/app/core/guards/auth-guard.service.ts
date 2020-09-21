import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

/**
 * A Guard for Authentication-needed routes
 *
 * @example '/user/profile' , '/user/wishlist'
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }
  /**
   * Decide if a route can be activated
   * Route can be activated only if the user is logged in (TOKEN exists && USER-TYPE = 'CUSTOMER')
   */
  canActivate() {
    if (localStorage.getItem('TOKEN') && localStorage.getItem('USER-TYPE') === 'CUSTOMER') {
      return true;
    } else {
      /**
       * Otherwise redirect to login page
       */
      this.router.navigate(['/login']);
      return false;
    }
  }
}
