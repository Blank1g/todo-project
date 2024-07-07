import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
