import { MetodoPago } from './../../models/MetodoPago';
import { Divisa } from './../../models/Divisa';
import { Injectable } from '@angular/core';
import { Recibo } from 'src/models/Recibo';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {
  recibos: Recibo[] = [];

  constructor() {
    this.recibos = [{
      id: 1,
      nombre: 'Prueba',
      comentario: 'Comentario',
      divisa: Divisa.Dolar,
      estatus: false,
      fecha: '2019-01-01',
      metodoDePago: 'Credito',
      monto: 399.00,
      provedor: 'Nintendo'
    }, {
      id: 2,
      nombre: 'Prueba',
      comentario: 'Comentario',
      divisa: Divisa.Dolar,
      estatus: true,
      fecha: '2019-01-01',
      metodoDePago: 'Debito',
      monto: 399.00,
      provedor: 'Nintendo'
    }, {
      id: 3,
      nombre: 'Prueba',
      comentario: 'Comentario',
      divisa: Divisa.Dolar,
      estatus: true,
      fecha: '2019-01-01',
      metodoDePago: 'Efectivo',
      monto: 399.00,
      provedor: 'Sony'
    }];
  }

  getRecibos(): Recibo[] {
    console.log(this.recibos.length);

    return this.recibos;
  }
}
