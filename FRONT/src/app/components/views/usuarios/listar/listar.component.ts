import { UsuarioService } from './../../../../services/usuario.service';
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
  constructor(private service: UsuarioService) { }
  ngOnInit(): void 
  {
    this.service.listar().subscribe((usuario)=>{
      this.usuario = usuario;

    });
  }

  }
