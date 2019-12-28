import { LandPageComponent } from './components/land-page/land-page.component';
import { SesionRegistroComponent } from './components/sesion-registro/sesion-registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionLoginComponent } from './components/sesion-login/sesion-login.component';


const routes: Routes = [
  { path: 'land', component: LandPageComponent },
  {
    path: '',
    redirectTo: '/land',
    pathMatch: 'full'
  },
  { path: 'login', component: SesionRegistroComponent },
  { path: 'registro', component: SesionLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

