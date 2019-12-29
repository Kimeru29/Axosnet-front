import { MetodoPago } from './MetodoPago';
import { Divisa } from './Divisa';

export class Recibo {
  id: number;
  nombre: string;
  monto: number;
  divisa: Divisa;
  estatus: boolean;
  metodoDePago: string;
  fecha: string;
  comentario: string;
  provedor: string;
}
