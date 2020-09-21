import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
