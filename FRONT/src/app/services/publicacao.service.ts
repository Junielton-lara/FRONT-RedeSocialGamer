import { Publicacao } from './../models/publicacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  baseURL = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }

  listar(): Observable<Publicacao[]>
  {
    return this.http.get<Publicacao[]>(`${this.baseURL}/publicacoes/listar`);
  }

  postar(publicacao: Publicacao): Observable<Publicacao>
  {
    return this.http.post<Publicacao>(`${this.baseURL}/publicacoes/postar`, publicacao);
  }

  
  homepage(id: string): Observable<Publicacao[]>{
    return this.http.get<Publicacao[]>(`${this.baseURL}/${id}`);
  }

  listarPorCategoria(id: string): Observable<Publicacao[]>{
    return this.http.get<Publicacao[]>(`${this.baseURL}/publicacoes/listar/categoria/${id}`);
  }

  listarPorAutor(id: string): Observable<Publicacao[]>{
    return this.http.get<Publicacao[]>(`${this.baseURL}/publicacoes/listar/autor/${id}`);
  }

}
