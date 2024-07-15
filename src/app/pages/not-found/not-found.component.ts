import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../local/local-storage.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  private router = inject(Router);
  private localStorageService = inject(LocalStorageService);

  back() {
    if (this.localStorageService.getItem('access_token')) {
      this.router.navigate(['/todo']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
