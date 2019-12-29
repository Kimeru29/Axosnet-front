import { Component, OnInit } from '@angular/core';
import { ProvedoresService } from 'src/app/services/provedores.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Recibo } from 'src/models/Recibo';
import { Provedor } from 'src/models/Provedor';

@Component({
  selector: 'app-editar-recibo',
  templateUrl: './editar-recibo.component.html',
  styleUrls: ['./editar-recibo.component.scss']
})
export class EditarReciboComponent implements OnInit {

  recibo: Recibo;
  provedores: Provedor[] = this.provedoresServ.getProvedores();
  divisas: any[] = this.provedoresServ.getDivisas();

  formulario = this.fb.group({
    provedor: ['', Validators.required],
    monto: ['', Validators.required],
    moneda: ['', Validators.required],
    comentario: ['', Validators.required],
    estatus: ['']
  });

  constructor(private provedoresServ: ProvedoresService, private fb: FormBuilder) {

  }

  ngOnInit() {

  }

  // TODO:
  onSubmit(): void {
    this.recibo = this.formulario.value;
    console.log(this.recibo);

    // this.registro.registro(this.usuario);
  }

  get f() {
    return this.formulario.controls;
  }

}
