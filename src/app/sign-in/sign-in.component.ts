import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup
  submitted = false;
  // Hardcoded email and password
  Email = 'akashniwane123@gmail.com';
  Password = 'akash@123';



  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (
      this.loginForm.value.email === this.Email &&
      this.loginForm.value.password === this.Password
    ) {
      // Navigate to the next page or dashboard
      this.router.navigate(['/dashboard']);
    
    } else {
      // Handle incorrect credentials (e.g., show an error message)
      console.log('Incorrect email or password');
      alert('Incorrect email or password')
      
    }
    if (this.loginForm.invalid) {
      return;
    }
  }
}
