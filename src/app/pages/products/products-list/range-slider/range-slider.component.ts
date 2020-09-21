import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  minValue = 6;
  maxValue = 600;
 options: Options = {
    floor: 6,
    ceil: 600
  };

  constructor() { }

  ngOnInit() {
  }

}
