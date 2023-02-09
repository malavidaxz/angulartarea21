import { Injectable } from '@angular/core';
/* import { LoginComponent } from '../principal/login/login.component'; */
import { Observable, throwError } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  readonly ISLOGGEDKEY = 'islogged';
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login(username: string, password: string): boolean {
    if ((username === "AD") && (password === "123456")) {
      localStorage.setItem(this.ISLOGGEDKEY, 'true');
      this.changeLoginStatusSubject.next(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
   
  }

   isLoggedIn() {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (isLogged) {
    return true;
    }
    else{
      return false;
    }
  }
  
}
