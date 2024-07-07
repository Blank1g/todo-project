import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService } from '../local/local-storage.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const localStorageService = inject(LocalStorageService);
  
  req.headers.set('Authorization', 'Bearer ' + localStorageService.getItem('access_token'));

  return next(req);
};
