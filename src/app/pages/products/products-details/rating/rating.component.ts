import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  public stars: Array<any> = new Array(5).fill(5, 5);
  public totalStars = 5;
  @Input() readonly: boolean;
  @Input() showAverage: boolean;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

  onRate(e) {}

}
