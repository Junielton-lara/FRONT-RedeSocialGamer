import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    baseURL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios/listar`);
  }

  cadastrar(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>(`${this.baseURL}/usuarios/cadastrar`, usuario);
  }

}
