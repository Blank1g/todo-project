import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  signup() {
    if (!this.signupForm.valid) return;

    const name = this.signupForm.get('name')!.value;
    const email = this.signupForm.get('email')!.value;
    const password = this.signupForm.get('password')!.value;
    const confirmPassword = this.signupForm.get('confirmPassword')!.value;

    if (!name || !email || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.signup(name, email, password).subscribe(
      () => {
        console.log('Signup successful');
        this.router.navigate(['/login']);
      },
      () => {
        console.log('Signup failed');
      }
    );
    
  }

}
