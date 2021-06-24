import { PublicacaoService } from './../../../../services/publicacao.service';
import { Publicacao } from './../../../../models/publicacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']
})
export class PostarComponent implements OnInit {

  publis: Publicacao = new Publicacao();

  constructor(private service: PublicacaoService) { }

  ngOnInit(): void {}
  
  postar()
  {
    this.service.postar(this.publis).subscribe((publis)=>{
      console.log(publis);
    });
  }

}
