import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {userServiceConstants} from '../constants/api.constants';
import {Observable} from 'rxjs';
import {Product, ProductTransformer} from '../models/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private productTransformer: ProductTransformer
  ) {
  }

  getUserAddresses() {
    return this.http.get(userServiceConstants.getUserAddresses);
  }

  addToWishlist(data) {
    return this.http.post(userServiceConstants.addToWishlist, data);
  }

  removeFromWishList(productId) {
    return this.http.delete(
      userServiceConstants.removeFromWishList + productId
    );
  }

  getWishlist(): Observable<Product[]> {
    return this.http
      .get(userServiceConstants.getWishlist)
      .pipe(
        map((data: any) =>
          data.map(product => this.productTransformer.transform(product))
        )
      );
  }

  profileInfo() {
    return this.http.get(userServiceConstants.profileInfo);
  }

  updateInfo(updatedUserInfo) {
    return this.http.put(userServiceConstants.updateInfo, updatedUserInfo);
  }

  changePassword(data) {
    return this.http.put(userServiceConstants.changePassword, data);
  }

  userAddress() {
    return this.http.get(userServiceConstants.userAddress);
  }

  editAddress(addressId, body) {
    return this.http.put(userServiceConstants.editAddress + addressId, body);
  }

  deleteAddress(id) {
    return this.http.delete(userServiceConstants.deleteAddress + id);
  }

  addAddress(addressData) {
    return this.http.post<any>(userServiceConstants.addAddress, addressData);
  }

  getOrders() {
    return this.http.get(userServiceConstants.getOrders);
  }

  getOrderDetails(id) {
    return this.http.get(userServiceConstants.getOrderDetails + id);
  }
}
