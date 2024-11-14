import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost:8080/api/auth/signup'
  constructor(private http:HttpClient) { }
  signup(userData: { username: string; email: string; password: string; nombre: string; apellidos: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }
}
