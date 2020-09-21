import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    FormsModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    CarouselModule , FormsModule, BsDropdownModule
  ]
})
export class NgxBootstrapModule { }
