import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterItem } from '../../../core/models/register-item';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {}
  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
      nickName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm(): void {
    const user: RegisterItem = {
      nickName: this.registerForm.value['nickName'],
      email: this.registerForm.value['email'],
      type:
        this.registerForm.value['type'] === 'both'
          ? ['writer', 'painter']
          : [this.registerForm.value['type']],
      password: this.registerForm.value['password'],
      role: 'user',
    };
    this.auth.registerUser(user);
  }
}
