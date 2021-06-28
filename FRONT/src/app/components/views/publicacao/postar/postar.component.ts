import { PublicacaoService } from './../../../../services/publicacao.service';
import { Publicacao } from './../../../../models/publicacao';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Usuario } from 'src/app/models/Usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']
})
export class PostarComponent implements OnInit {
  categorias : Categoria[] = [];

  imagem! : string;
  corpo! : string;
  autor!: Usuario;
  categoria!: Categoria;
  idCategoria!: string;

  constructor(private service: PublicacaoService, private categoriaService: CategoriaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.categoriasExistentes();
  }
  
  postar(): void
  {
    let publicacao = new Publicacao();
    publicacao.imagem = this.imagem;
    publicacao.corpo = this.corpo;
    publicacao.autor = this.autor;
    publicacao.categoria = this.categoria;
    this.service.postar(publicacao).subscribe((publis)=>{
      console.log(publis);
      this.snack.open("Publicação postada", "Home", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }

  categoriasExistentes(): void{
    this.categoriaService.listar().subscribe((categorias) => {
      console.log(categorias)
      this.categorias = categorias;
    })
  }

}
