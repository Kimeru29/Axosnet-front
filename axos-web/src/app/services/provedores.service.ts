import { Provedor } from './../../models/Provedor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {
  provedores: Provedor[];
  constructor() {
    this.provedores = [{
      id: 2,
      nombre: 'Nintendo'
    },
    {
      id: 3,
      nombre: 'Sony'
    },
    {
      id: 4,
      nombre: 'Microsoft'
    }];
  }

  getProvedores(): Provedor[] {
    // console.log(this.provedores.length);

    return this.provedores;
  }

  getDivisas(): any[] {
    return [{ id: 2, nombre: 'MXN' }, { id: 3, nombre: 'DLL' }];
  }
}
