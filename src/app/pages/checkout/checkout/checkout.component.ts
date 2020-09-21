import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../../core/helpers/localStorage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  activeStep = 0;
  shippingInformationStepValid = false;
  shippingInformation;

  constructor(
    public localStorage: LocalStorage
  ) { }

  ngOnInit(): void {
  }

  stepChanged(index, target) {
    console.log(index)
    this.activeStep = index;
    target.scrollLeft = index * target.offsetWidth;
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 500);
  }

  shippingInformationValid(event) {
    this.shippingInformationStepValid = true;
    this.shippingInformation = event;
  }

}
