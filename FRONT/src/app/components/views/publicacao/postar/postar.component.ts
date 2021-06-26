import { PublicacaoService } from './../../../../services/publicacao.service';
import { Publicacao } from './../../../../models/publicacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']
})
export class PostarComponent implements OnInit {

  imagem! : String;
  corpo! : string

  constructor(private service: PublicacaoService) { }

  ngOnInit(): void {}
  
  postar()
  {
    let publicacao = new Publicacao();
    publicacao.imagem = this.imagem;
    publicacao.corpo = this.corpo;
    this.service.postar(publicacao).subscribe((publis)=>{
      console.log(publis);
    });
  }

}
