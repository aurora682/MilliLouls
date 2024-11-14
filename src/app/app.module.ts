import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
