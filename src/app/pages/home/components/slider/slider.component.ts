import { Component, OnInit, Input } from '@angular/core';
import { SliderModel } from 'src/app/core/models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slider: SliderModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
