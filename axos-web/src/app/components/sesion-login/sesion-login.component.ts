import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CuentaService } from './../../services/cuenta.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'sesion-login',
  templateUrl: './sesion-login.component.html',
  styleUrls: ['./sesion-login.component.scss']
})
export class SesionLoginComponent implements OnInit {
  usuario: User;

  formulario = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private registro: CuentaService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.usuario = this.formulario.value;
    this.registro.registro(this.usuario);
  }

  get f() {
    return this.formulario.controls;
  }
}
