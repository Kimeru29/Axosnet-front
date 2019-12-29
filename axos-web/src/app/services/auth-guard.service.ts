import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  token: string;
  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  canActivate() {
    this.token = localStorage.getItem('jwt');
    console.log(this.token);

    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      console.log(this.jwtHelper.decodeToken(this.token));
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
