import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/Categoria';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseURL = "http://localhost:3000/categorias";

  constructor(private http: HttpClient) { }

  listar(): Observable<Categoria[]>
  {
    return this.http.get<Categoria[]>(`${this.baseURL}/listar`);
  }

  cadastrar(categoria: Categoria): Observable<Categoria>
  {
    return this.http.post<Categoria>(`${this.baseURL}/criar`, categoria);
  }

}
