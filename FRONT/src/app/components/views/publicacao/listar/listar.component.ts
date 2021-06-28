import { PublicacaoService } from './../../../../services/publicacao.service';
import { Publicacao } from './../../../../models/publicacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarP',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponentPub implements OnInit 
{
  publis: Publicacao[] = [];
  constructor(private service: PublicacaoService) { }

  ngOnInit(): void 
  {
    this.service.listar().subscribe((publis)=>{
      this.publis = publis;
    });
  }

}
