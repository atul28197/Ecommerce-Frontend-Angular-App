import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
  path: 'products',
  loadChildren: () =>
    import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES)
  // canActivate: [roleGuard('admin')]

},
{
  path: 'cart',
  loadChildren: () =>
    import('./features/cart/cart.routes').then(m => m.CART_ROUTES)
}
,
{
  path: 'admin',
  loadChildren: () =>
    import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
}


];
