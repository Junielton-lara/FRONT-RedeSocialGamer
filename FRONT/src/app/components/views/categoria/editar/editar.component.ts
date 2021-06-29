import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  categoria!: Categoria;
  id!: string;
  nome! : string;
  genero1! : string;
  genero2! : string;
  generos: String[] = ["FPS", "MOBA", "RPG", "MMORPG", "BATTLE ROYALE", "AÇÃO", "TERROR", "ESTRATÉGIA",
  "SOBREVIVÊNCIA", "AVENTURA", "SIMULAÇÃO", "CRIATIVO", "JOGO DE PLATAFORMA", 
  "JOGO DE CARTAS E TABULEIRO", "QUEBRA-CABEÇAS", "ROGUE LIKE", "JOGO DE CORRIDA",
  "JOGO MUSICAL E DE RITMO", "JOGO INDIE", "ESPORTES", "MUNDO ABERTO", 
  "JOGO EDUCACIONAL", "JOGO MOBILE", ""];

  private routeSub: Subscription = new Subscription();

  constructor(private service: CategoriaService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.service.listarPorId(this.id).subscribe((categoria) =>{
      this.categoria = categoria;
    })
  }

  editar(): void
  {
    let categoria = new Categoria();
    categoria._id = this.id;
    categoria.nome = this.nome;
    categoria.genero1 = this.genero1;
    categoria.genero2 = this.genero2;
    this.service.editar(categoria).subscribe((categoria)=>{
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
