import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  forgotPassword: boolean = false;

  loginForm: FormGroup;
  login: boolean = false;

  private fb_loginForm: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  loginAccount = {
    email: '',
    password: '',
  };

  constructor() {
    this.loginForm = this.fb_loginForm.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        /* [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$'
          ),
        ], */
      ],
    });
  }

  onSubmit(): void {
    this.login = true;

    if (this.loginForm.valid) {
      console.log('Form submitted!');
      console.log(this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe((res) => {
        this.loginAccount = res;
        console.log(this.loginAccount);
        
    
        this.router.navigate(['']); 
      });
    }
  }

  toggleForgotPassword() {
    this.forgotPassword = !this.forgotPassword;
  }
}
