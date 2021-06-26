import { Usuario } from './../../../../models/Usuario';
import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit 
{
  nome! : string;
  email!: string;
  senha! : string;
  constructor(private service: UsuarioService) { }

  ngOnInit(): void { }

  cadastrar()
  {
    let usuario = new Usuario();
    usuario.nome = this.nome;
    usuario.email = this.email;
    usuario.senha = this.senha;
    this.service.cadastrar(usuario).subscribe((usuario)=>{
    console.log(usuario);

    });
  }

}
