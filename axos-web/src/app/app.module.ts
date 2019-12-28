import { CuentaService } from './services/cuenta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './components/land-page/land-page.component';
import { LandPageInicialComponent } from './components/land-page-inicial/land-page-inicial.component';
import { SesionRegistroComponent } from './components/sesion-registro/sesion-registro.component';
import { SesionLoginComponent } from './components/sesion-login/sesion-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LandPageInicialComponent,
    SesionRegistroComponent,
    SesionLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CuentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
