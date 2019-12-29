import { User } from './../../models/User';
import { MetodoPago } from './../../models/MetodoPago';
import { Divisa } from './../../models/Divisa';
import { Injectable } from '@angular/core';
import { Recibo } from 'src/models/Recibo';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {
  recibos: Recibo[] = [];
  credenciales: any;

  constructor(private router: Router, private http: HttpClient) {
    this.recibos = [{
      id: 1,
      nombre: 'Prueba',
      comentario: 'Comentario',
      divisa: 1,
      estatus: false,
      fecha: '2019-01-01',
      metodoDePago: 'Credito',
      monto: 399.00,
      provedor: 1,
      usuarioId: undefined

    }, {
      id: 2,
      nombre: 'Prueba',
      comentario: 'Comentario',
      divisa: 2,
      estatus: true,
      fecha: '2019-01-01',
      metodoDePago: 'Debito',
      monto: 399.00,
      provedor: 2,
      usuarioId: undefined

    }, {
      id: 3,
      nombre: 'Prueba',
      comentario: 'Comentario',
      divisa: 3,
      estatus: true,
      fecha: '2019-01-01',
      metodoDePago: 'Efectivo',
      monto: 399.00,
      provedor: 3,
      usuarioId: undefined
    }];
  }

  getRecibos(): Recibo[] {
    console.log(this.recibos.length);
    return this.recibos;
  }

  async guardarRecibo(recibo: Recibo): Promise<any> {
    const usuario: User = JSON.parse(localStorage.getItem('usuario'));
    recibo.usuarioId = usuario.id;
    console.log(`recibo: ${recibo}`);

    this.credenciales = JSON.stringify(recibo);
    this.http.post('https://localhost:5001/api/recibo', this.credenciales, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (response as any).token;
      localStorage.setItem('jwt', token);
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }
}
