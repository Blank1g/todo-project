import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor() { }

  login() {
    if (!this.loginForm.valid) return;
    
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    if (!email || !password) return;

    this.authService.login(email, password).subscribe(
      () => {
        console.log('Login successful');
        this.router.navigate(['/todo']);
      },
      () => {
        console.log('Login failed');
      }
    );

  }

}
