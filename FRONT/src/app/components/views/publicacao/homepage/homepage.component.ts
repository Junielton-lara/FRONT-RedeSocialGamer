import { Component, OnInit } from '@angular/core';
import { PublicacaoService } from 'src/app/services/publicacao.service';
import { Publicacao } from 'src/app/models/publicacao';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  id = "608c6d66d55ace27f4cb952f";
  publis : Publicacao[] = [];
  



  constructor(private service: PublicacaoService) { }

  ngOnInit(): void {
    this.service.homepage(this.id).subscribe((publicacoes) => {
      this.publis = publicacoes;
    })
  }

}
