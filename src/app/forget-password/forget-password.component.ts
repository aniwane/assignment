import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm!:FormGroup
  submitted = false;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]]
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.forgetForm.invalid) {
      return;
    }
    alert('Success');
  }
}
