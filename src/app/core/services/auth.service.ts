import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterItem } from '../models/register-item';
import { Guid } from 'guid-typescript';
import { AuthChecker } from '../checkers/auth-checker';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authChecker: AuthChecker) {}

  registerUser(user: RegisterItem): void {
    //before i have a backend
    console.log(user);
    localStorage.setItem('user', user.nickName);
    localStorage.setItem('userRole', user.role);
  }

  loginUser(userId: Guid, role: string): void {
    this.authChecker.userId.next(userId.toString());
    this.authChecker.userRole.next(role);
  }

  logOutUser() {
    this.authChecker.userId.next(null);
    this.authChecker.userRole.next(null);
  }
}
