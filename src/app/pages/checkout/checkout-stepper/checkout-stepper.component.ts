import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/core/helpers/localStorage';

@Component({
  selector: 'app-checkout-stepper',
  templateUrl: './checkout-stepper.component.html',
  styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent implements OnInit {
  stepsEn = ['Shipping Information', 'Payment Methods', 'Confirm'];
  stepsAr = ['معلومات الشحن', 'طريقة الدفع', 'تاكيد'];
  @Input() activeStep = 0;
  @Input() shippingInformationStepValid;
  @Input() orderPlaced;
  @Output() stepChanged: EventEmitter<any> = new EventEmitter<any>();
  steps: string[];

  constructor(
    private router: Router,
    public localStorage: LocalStorage
  ) { }

  ngOnInit(): void {
    this.steps = this.localStorage.getLang() === 'en' ? this.stepsEn : this.stepsAr;
  }

  changeStep(index) {
    if (index === 1 && this.shippingInformationStepValid || index === 0) {
      this.activeStep = index;
      this.stepChanged.emit(index);
    }
    if (index === 2 && this.orderPlaced) {
      this.router.navigateByUrl('payment/confirmation');
    }
  }

}
