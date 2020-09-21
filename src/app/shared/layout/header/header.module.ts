import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TopBarComponent,
    NavBarComponent,
    BottomBarComponent,
    CategoriesMenuComponent
  ],
  imports: [
    CommonModule ,
    SharedModule ,
    RouterModule
  ],
  exports: [
    HeaderComponent ,
    SharedModule ,
    RouterModule, 
  ]
})
export class HeaderModule { }
