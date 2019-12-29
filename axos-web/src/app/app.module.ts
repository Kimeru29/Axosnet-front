import { AuthGuardService } from './services/auth-guard.service';
import { AccountService as AccountService } from './services/cuenta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './components/land-page/land-page.component';
import { LandPageInicialComponent } from './components/land-page-inicial/land-page-inicial.component';
import { SesionRegistroComponent } from './components/sesion-registro/sesion-registro.component';
import { SesionLoginComponent } from './components/sesion-login/sesion-login.component';
import { RecibosComponent } from './components/recibos/recibos.component';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LandPageInicialComponent,
    SesionRegistroComponent,
    SesionLoginComponent,
    RecibosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AccountService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
