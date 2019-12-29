import { AccountService } from './../../services/cuenta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'sesion-registro',
  templateUrl: './sesion-registro.component.html',
  styleUrls: ['./sesion-registro.component.scss']
})
export class SesionRegistroComponent implements OnInit {
  token: string;

  formulario = this.fb.group({
    correo: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private logi: AccountService, private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.logi.login(this.formulario.value);
  }


  get f() {
    return this.formulario.controls;
  }

  isUserAuthenticated() {
    this.token = localStorage.getItem('jwt');
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      return true;
    } else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem('jwt');
  }


}
