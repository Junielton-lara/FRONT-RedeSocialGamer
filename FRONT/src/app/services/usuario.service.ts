import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    baseURL = "http://localhost:3000/usuarios";
  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(`${this.baseURL}/listar`);
  }

  cadastrar(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>(`${this.baseURL}/cadastrar`, usuario);
  }

}
