import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() title: string;
  filters = [
    {
      name: this.title,
      checked: false
    },
    {
      name: this.title,
      checked: false
    },
    {
      name: this.title,
      checked: false
    },
    {
      name: this.title,
      checked: false
    }
  ];
  allChecked = false;

  constructor() { }

  ngOnInit() {
  }

  checkAll(event) {
    this.filters.forEach(filter => filter.checked = event.checked);
    this.allChecked = event.checked;
  }

  filterChanged(event, index) {
    this.filters[index].checked = event.checked;
    this.allChecked = this.filters.every(filter => filter.checked);
  }

}
