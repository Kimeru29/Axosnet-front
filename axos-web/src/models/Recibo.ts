import { MetodoPago } from './MetodoPago';
import { Divisa } from './Divisa';

export class Recibo {
  id: number;
  nombre: string;
  monto: number;
  divisa: number;
  estatus: boolean;
  metodoDePago: string;
  fecha: string;
  comentario: string;
  provedor: number;
  usuarioId: any;
}
