import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    const router = new Router();
    router.navigate(['/auth']);
    return false;
  }

  return true;
};
