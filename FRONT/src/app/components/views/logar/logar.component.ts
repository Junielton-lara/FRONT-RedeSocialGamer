import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  email!: string;
  senha!: string;
  login!: Usuario;

  constructor(private service: UsuarioService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    
  }

  verificar(): void {
    let login = new Usuario();
    login.email = this.email;
    login.senha = this.senha;
    this.login = login;
    this.service.login(login).subscribe(() =>{
    });
  }
}
