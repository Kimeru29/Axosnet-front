import { RecibosService } from './../../services/recibos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProvedoresService } from './../../services/provedores.service';
import { Component, OnInit } from '@angular/core';
import { Provedor } from 'src/models/Provedor';
import { Recibo } from 'src/models/Recibo';

@Component({
  selector: 'app-registrar-recibo',
  templateUrl: './registrar-recibo.component.html',
  styleUrls: ['./registrar-recibo.component.scss']
})
export class RegistrarReciboComponent implements OnInit {
  // FIXME: DDL de provedores.
  recibo: Recibo;
  provedores: Provedor[] = this.provedoresServ.getProvedores();
  divisas: any[] = this.provedoresServ.getDivisas();


  formulario = this.fb.group({
    provedorId: ['', Validators.required],
    monto: ['', Validators.required],
    divisaId: ['', Validators.required],
    comentario: ['', Validators.required],
    metodoDePago: ['', Validators.required],
    estatus: ['']
  });

  constructor(private provedoresServ: ProvedoresService, private fb: FormBuilder, private recibosServ: RecibosService) {

  }

  ngOnInit() {

  }

  // TODO:
  onSubmit(): void {
    this.recibo = this.formulario.value;
    console.log('submit');
    console.log(this.recibo);
    this.recibosServ.guardarRecibo(this.recibo);
    // this.registro.registro(this.usuario);
  }

  get f() {
    return this.formulario.controls;
  }

}
