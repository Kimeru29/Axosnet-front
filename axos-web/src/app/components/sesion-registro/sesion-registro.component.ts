import { CuentaService } from './../../services/cuenta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'sesion-registro',
  templateUrl: './sesion-registro.component.html',
  styleUrls: ['./sesion-registro.component.scss']
})
export class SesionRegistroComponent implements OnInit {
  formulario = this.fb.group({
    nombre: ['', Validators.required],
    contrasena: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private logi: CuentaService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('Válido');
    this.logi.login(this.formulario.value);
  }


  get f() {
    return this.formulario.controls;
  }


}
