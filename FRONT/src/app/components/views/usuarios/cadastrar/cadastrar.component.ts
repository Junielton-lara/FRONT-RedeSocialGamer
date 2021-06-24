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
  
    usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService) { }

  ngOnInit(): void { }

  cadastrar()
  {
      this.service.cadastrar(this.usuario).subscribe((usuario)=>{
      console.log(usuario);

    });
  }

}
