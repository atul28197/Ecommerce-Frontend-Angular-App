import { Routes } from '@angular/router';
import { List } from './list/list';
import { Detail } from './detail/detail';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const PRODUCTS_ROUTES: Routes = [

  { path: '', component: List },

  { path: ':id', component: Detail },

];
