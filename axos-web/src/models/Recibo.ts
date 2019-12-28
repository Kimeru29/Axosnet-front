import { MetodoPago } from './MetodoPago';
import { Divisa } from './Divisa';

export class Provedor {
  id: number;
  nombre: string;
  monto: number;
  divisa: Divisa;
  estatus: boolean;
  metodoDePago: MetodoPago;
  fecha: Date;
  comentario: string;
}
