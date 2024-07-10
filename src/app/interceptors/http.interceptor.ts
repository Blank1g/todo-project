import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService } from '../local/local-storage.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const localStorageService = inject(LocalStorageService);
  
  const token = localStorageService.getItem('access_token');
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
