import { Categoria } from './../../../../models/Categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  nome! : string;
  genero1! : string;
  genero2! : string;

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {}

  criar(): void
  {
    let categoria = new Categoria();
    categoria.nome = this.nome;
    categoria.genero1 = this.genero1;
    categoria.genero2 = this.genero2;
    this.service.cadastrar(categoria).subscribe((categoria)=>{
      console.log(categoria);
    });
  }
}
