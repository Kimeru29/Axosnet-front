import { RegistrarReciboComponent } from './components/registrar-recibo/registrar-recibo.component';
import { RecibosComponent } from './components/recibos/recibos.component';
import { LandPageComponent } from './components/land-page/land-page.component';
import { SesionRegistroComponent } from './components/sesion-registro/sesion-registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionLoginComponent } from './components/sesion-login/sesion-login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'land', component: LandPageComponent },
  {
    path: '',
    redirectTo: '/land',
    pathMatch: 'full'
  },
  { path: 'login', component: SesionRegistroComponent },
  { path: 'registro', component: SesionLoginComponent },
  { path: 'registrarRecibo', component: RegistrarReciboComponent, canActivate: [AuthGuardService] },
  { path: 'recibosList', component: RecibosComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

