import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        alert("autenticado con exito")
        console.log('Autenticado con éxito:', response);
        // Aquí puedes redirigir al usuario o almacenar el token
      },
      error => {
        console.error('Error de autenticación:', error);
      }
    );
  }
}
