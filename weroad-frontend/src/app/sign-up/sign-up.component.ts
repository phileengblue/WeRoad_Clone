import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm: FormGroup;
  signup: boolean = false;
  private fb_signupForm: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router); 

  constructor() {
    this.signupForm = this.fb_signupForm.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      birth_date: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          /* Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$'
          ), */
        ],
      ],
    });
  }

  signupAccount = {
    firstname: '',
    lastname: '',
    gender: '',
    birth_date: new Date(),
    phone_number: '',
    email: '',
    password: '',
  };

  handleSubmit(): void {
    this.signup = true;
    if (this.signupForm.valid) {
      console.log('Form submitted!');
      console.log(this.signupForm.value);

      this.authService.signup(this.signupForm.value).subscribe((res) => {
        this.signupAccount = res;
        console.log(this.signupAccount);

        // Effettua il redirect alla pagina di login
        this.router.navigate(['login']);
      });
    }
  }
}