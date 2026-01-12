import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const AUTH_ROUTES: Routes = [

  { path: '', component: Login },
  
  { path: 'signup', component: Signup }
];
