import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthChecker {
  public userId = new BehaviorSubject<string | null>(null);
  public userId$ = this.userId.asObservable();

  public userRole = new BehaviorSubject<string | null>(null);
  public userRole$ = this.userRole.asObservable();
}
