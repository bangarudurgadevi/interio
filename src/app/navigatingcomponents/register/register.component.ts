import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  successmessage = "";
  errormessage = "";
  registrationform = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });
  constructor(private service: RegisterService, private fb: FormBuilder,private router:Router) { }
  onsubmit() {
    if (this.registrationform.valid) {
      this.service.registeruser(this.registrationform.value).subscribe({
        next:()=>{
          this.successmessage="registration successful";
          this.registrationform.reset();

        }
        ,error:()=>{
          this.errormessage="something went wrong try again";

        }
      })
    }
    else {
      this.errormessage = "please fill all required fields correctly";
    }
  }

}

