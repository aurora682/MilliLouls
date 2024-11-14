import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'iniciarSesion',component:IniciarSesionComponent},
  {path:'crearCuenta',component:CrearCuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
