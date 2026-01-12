import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth/auth';
import { inject } from '@angular/core/primitives/di';

export const roleGuard = (role: string): CanActivateFn => {
  return () => {
    const auth = inject(Auth);
    const router = inject(Router);

    if (!auth.isLoggedIn() || auth.getRole() !== role) {
      router.navigate(['/auth']);
      return false;
    }

    return true;
  };
};
