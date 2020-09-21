import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ConcernComponent } from './components/concern/concern.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ConcernComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class HomeModule { }
