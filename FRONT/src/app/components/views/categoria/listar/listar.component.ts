import { Categoria } from './../../../../models/Categoria';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-listarC',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponentCat implements OnInit 
{
  categoria : Categoria[]= [];
  constructor(private http: HttpClient) 
  {
    http.get<Categoria[]>("http://localhost:3000/categorias/listar").subscribe((genero)=>{
      this.categoria = genero;
      console.log(this.categoria);


    });

   }

  ngOnInit(): void {
  }

}
