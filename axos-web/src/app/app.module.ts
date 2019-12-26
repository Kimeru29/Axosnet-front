import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './components/land-page/land-page.component';
import { LandPageInicialComponent } from './components/land-page-inicial/land-page-inicial.component';
import { LandPageInfoComponent } from './components/land-page-info/land-page-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LandPageInicialComponent,
    LandPageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
