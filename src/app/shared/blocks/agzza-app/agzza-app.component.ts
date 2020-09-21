import { Component, OnInit } from '@angular/core';

import {faApple }  from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay }  from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-agzza-app',
  templateUrl: './agzza-app.component.html',
  styleUrls: ['./agzza-app.component.scss']
})
export class AgzzaAppComponent implements OnInit {

  
  faApple= faApple;
  faGooglePlay = faGooglePlay;
  constructor() { }

  ngOnInit(): void {
  }

}
