import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() count = 1;
  @Input() fullWidth: boolean;
  @Output() countEmitter: EventEmitter<number> = new EventEmitter<number>();
  faMinus = faMinus;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {}

  increment(value) {
    if (value < 0 && this.count === 1) {
      return;
    }
    this.count += value;
    this.countEmitter.emit(this.count);
  }

}
