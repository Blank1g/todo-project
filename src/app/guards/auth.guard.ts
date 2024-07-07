import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { LocalStorageService } from '../local/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);

  if (!localStorageService.getItem('access_token')) {
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};
