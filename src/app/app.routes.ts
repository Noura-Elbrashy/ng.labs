import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
   { path: 'product/:id', component: ProductComponent },
   { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
