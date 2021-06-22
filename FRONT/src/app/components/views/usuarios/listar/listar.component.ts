import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from "./../../../../models/Usuario";

@Component({
  selector: 'app-listarU',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponentUsu implements OnInit 
{

  usuario : Usuario[] = [];
  constructor(private http: HttpClient) { 
    http.get<Usuario[]>("http://localhost:3000/usuarios/listar").subscribe((dados) =>
    {
      this.usuario = dados;
      console.log(this.usuario);
    });
  }
  ngOnInit(): void {
  }

  }
