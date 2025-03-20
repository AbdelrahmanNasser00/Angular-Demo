import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';
import { UserAuthService } from '../../../services/user-auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule],
  providers: [UsersService],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private authService: UserAuthService
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.usersService.getAllUsers().subscribe({
        next: (users) => {
          const user = users.find(
            (u: User) =>
              u.email === this.loginForm.value.email &&
              u.password === this.loginForm.value.password
          );

          if (user) {
            this.authService.Login();
            this.router.navigate(['/products']);
          } else {
            this.loginError = true;
          }
        },
        error: () => {
          this.loginError = true;
        },
      });
    }
  }
}
