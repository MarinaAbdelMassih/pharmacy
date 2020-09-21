import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
