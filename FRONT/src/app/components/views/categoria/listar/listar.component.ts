import { Categoria } from './../../../../models/Categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listarC',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponentCat implements OnInit 
{
  categorias : Categoria[] = [];
  constructor(private service: CategoriaService) {}

  ngOnInit(): void 
  {
    this.service.listar().subscribe((categorias)=>{
      this.categorias = categorias;

    });
  }

}
