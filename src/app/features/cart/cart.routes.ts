import { Routes } from '@angular/router';
import { Cart } from './cart';
import { authGuard } from '../../core/guards/auth.guard';

export const CART_ROUTES: Routes = [
  { path: '', component: Cart, canActivate: [authGuard] }
  
];
