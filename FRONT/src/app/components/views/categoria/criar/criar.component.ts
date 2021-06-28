import { Categoria } from './../../../../models/Categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  nome! : string;
  genero1! : string;
  genero2! : string;
  generos: String[] = ["FPS", "MOBA", "RPG", "MMORPG", "BATTLE ROYALE", "AÇÃO", "TERROR", "ESTRATÉGIA",
  "SOBREVIVÊNCIA", "AVENTURA", "SIMULAÇÃO", "CRIATIVO", "JOGO DE PLATAFORMA", 
  "JOGO DE CARTAS E TABULEIRO", "QUEBRA-CABEÇAS", "ROGUE LIKE", "JOGO DE CORRIDA",
  "JOGO MUSICAL E DE RITMO", "JOGO INDIE", "ESPORTES", "MUNDO ABERTO", 
  "JOGO EDUCACIONAL", "JOGO MOBILE", ""];

  constructor(private service: CategoriaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {}

  criar(): void
  {
    let categoria = new Categoria();
    categoria.nome = this.nome;
    categoria.genero1 = this.genero1;
    categoria.genero2 = this.genero2;
    this.service.cadastrar(categoria).subscribe((categoria)=>{
      console.log(categoria);
      this.snack.open("Categoria criada", "Categorias", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }
}
