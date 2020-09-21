import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './pages/brands/brands.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ShippingDeliveryComponent } from './pages/shipping-delivery/shipping-delivery.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password/forgot-password.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LoginGuard } from './core/guards/login-guard.service';
import { AuthGuard } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(res => res.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(res => res.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/products/products.module').then(res => res.ProductsModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/checkout/checkout.module').then(res => res.CheckoutModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(res => res.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
  ,
  {
    path: 'delivery',
    component: ShippingDeliveryComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
