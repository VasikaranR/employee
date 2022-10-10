import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  helper:any = new JwtHelperService ();

  constructor() {

   }

   public isAuthenticated(): boolean {
    console.log('cameeee')
    const token:any = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.helper.isTokenExpired(token);
  }
}