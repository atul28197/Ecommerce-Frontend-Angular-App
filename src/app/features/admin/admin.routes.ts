import { Routes } from '@angular/router';
import { List } from './products/list/list';
import { Create } from './products/create/create';
import { Edit } from './products/edit/edit';
import { DiscountCodes } from './discount-codes/discount-codes';
import { Report } from './report/report';
import { roleGuard } from '../../core/guards/role.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'products',
    canActivate: [roleGuard('admin')],
    children: [
      { path: '', component: List },
      { path: 'create', component: Create },
      { path: ':id/edit', component: Edit }
    ]
  },
  {
    path: 'discount-codes',
    component: DiscountCodes,
    canActivate: [roleGuard('admin')]
  },
  {
    path: 'report',
    component: Report,
    canActivate: [roleGuard('admin')]
  }
];
