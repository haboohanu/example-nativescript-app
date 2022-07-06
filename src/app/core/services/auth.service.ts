import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  get isLoggedIn(): boolean {
    return this.loggedIn
  }

  setLoggedIn(val: boolean){
    this.loggedIn = val;
  }
}
