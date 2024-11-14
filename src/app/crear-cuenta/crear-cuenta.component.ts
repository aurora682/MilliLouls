import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {
  user = {
    username: '',
    email: '',
    password: '',
    nombre: '',
    apellidos: ''
  };

  constructor(private authService: AuthService) {}

  onSignup() {
    this.authService.signup(this.user).subscribe(
      response => {
        console.log(response.message);
        alert('Usuario registrado con exito');
      },
      error => {
        console.error(error);
        alert('Ocurrio un error con el registro :(');
      }
    );
  }
}
