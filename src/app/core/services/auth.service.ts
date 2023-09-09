import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterItem } from '../models/register-item';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  registerUser(user: RegisterItem): void {
    //before i have a backend
    console.log(user);
    localStorage.setItem('user', user.nickName);
    localStorage.setItem('userRole', user.role);
  }
}
