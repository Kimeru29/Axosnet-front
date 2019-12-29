import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  credenciales: any;
  loginInvalido: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  async registro(usuario: User): Promise<any> {


    await fetch('https://localhost:5001/api/Cuentas', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }



  async login(usuario: User): Promise<any> {
    console.log('Login');

    this.credenciales = JSON.stringify(usuario);
    await this.http.post('https://localhost:5001/api/auth/login', this.credenciales, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (response as any).token;
      localStorage.setItem('jwt', token);

      this.loginInvalido = false;
      this.router.navigate(['recibosList']);
    }, err => {
      this.loginInvalido = true;
    });
  }

  getUser(mail: string) {
    fetch(`https://localhost:5001/api/Cuentas/usuario?correo=${mail}`, {
      mode: 'cors',
      method: 'Get',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(
        response => response.json()
      )
      .then(json => localStorage.setItem('usuario', JSON.stringify(json)));
  }
}




