import { User } from './../../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor() { }

  async registro(usuario: User): Promise<any> {
    console.log('Registro');

    await fetch('https://jsonplaceholder.typicode.com/posts', {
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

    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
}
