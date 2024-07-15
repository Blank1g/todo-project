import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService } from '../local/local-storage.service';
import { Router } from '@angular/router';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);
  
  const token = localStorageService.getItem('access_token');

  if (!token) {
    router.navigate(['/login']);
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
