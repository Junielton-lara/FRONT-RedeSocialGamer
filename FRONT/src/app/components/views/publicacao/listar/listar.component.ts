import { Publicacao } from './../../../../models/publicacao';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-listarP',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponentPub implements OnInit 
{
  publis: Publicacao[] = [];
  constructor(private http: HttpClient) { 
    http.get<Publicacao[]>("http://localhost:3000/publicacoes/listar").subscribe((posts) =>
    {
      this.publis = posts;
      console.log(this.publis);
    });
  }

  ngOnInit(): void {
  }

}
