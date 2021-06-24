import { Categoria } from './../../../../models/Categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {}

  criar(): void
  {
    this.service.cadastrar(this.categoria).subscribe((categoria)=>{
      console.log(categoria);
    });
  }
}
