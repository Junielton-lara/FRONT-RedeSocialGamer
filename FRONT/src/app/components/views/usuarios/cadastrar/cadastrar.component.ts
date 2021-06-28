import { Usuario } from './../../../../models/Usuario';
import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  constructor(private service: UsuarioService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void { }

  cadastrar()
  {
    let usuario = new Usuario();
    usuario.nome = this.nome;
    usuario.email = this.email;
    usuario.senha = this.senha;
    console.log(usuario)
    this.service.cadastrar(usuario).subscribe((usuario) =>{
    console.log(usuario);
    this.snack.open("Cadastrado com sucesso", "Login", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
    this.router.navigate(["../listar"]);

    });
  }

}
