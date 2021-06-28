import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    baseURL = "http://localhost:3000";
  constructor(private http: HttpClient, private router: Router) { }

  listar(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios/listar`);
  }

  cadastrar(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>(`${this.baseURL}/usuarios/cadastrar`, usuario);
  }

  login(usuario: Usuario){
    return this.http.post<Usuario>(`${this.baseURL}/login`, usuario).pipe(map(usuario => {
      localStorage.setItem('_id', usuario._id);
      console.log(localStorage.getItem('_id'));
    }));
  }

  logout(){
    localStorage.setItem('_id', "");
    this.router.navigate(['/usuarios/login'])
  }

}
