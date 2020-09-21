import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shipping-delivery',
  templateUrl: './shipping-delivery.component.html',
  styleUrls: ['./shipping-delivery.component.scss']
})
export class ShippingDeliveryComponent implements OnInit {

  faHeart = faHeart ;
  faMapMarkerAlt = faMapMarkerAlt ;
  faStar = faStar ;
  constructor() { }

  ngOnInit(): void {
  }

}
                                      