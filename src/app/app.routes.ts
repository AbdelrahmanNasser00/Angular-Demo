import { Routes } from '@angular/router';
import { MasterProductsComponent } from './Components/master-products/master-products.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { SliderComponent } from './Components/slider/slider.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SignupFormComponent } from './Components/forms/signup-form/signup-form.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import { AddEditPrdComponent } from './Components/add-edit-prd/add-edit-prd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { userGuard } from './Guards/user.guard';
import { UserTokenComponent } from './Components/user-token/user-token.component';
import { LoginFormComponent } from './Components/forms/login-form/login-form.component';
import { loginGuard } from './Guards/login-guard.guard';

export const routes: Routes = [
  //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LoginFormComponent, canActivate: [loginGuard] },
  {
    path: 'products',
    component: MasterProductsComponent,
    canActivate: [userGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [userGuard] },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [userGuard],
  },
  { path: 'signup', component: SignupFormComponent, canActivate: [loginGuard] },
  { path: 'shop', component: ShoppingComponent, canActivate: [userGuard] },
  {
    path: 'shop/:id',
    component: ShoppingDetailsComponent,
    canActivate: [userGuard],
  },
  { path: 'addedit', component: AddEditPrdComponent, canActivate: [userGuard] },
  {
    path: 'addedit/:id',
    component: AddEditPrdComponent,
    canActivate: [userGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [userGuard],
  },
  {
    path: 'dashboard/:id',
    component: UserDetailsComponent,
    canActivate: [userGuard],
  },

  { path: '**', component: ErrorComponent },
];
