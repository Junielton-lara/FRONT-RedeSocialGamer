import { Component, OnInit } from '@angular/core';
import { PublicacaoService } from 'src/app/services/publicacao.service';
import { Publicacao } from 'src/app/models/publicacao';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  id!: string;
  publis : Publicacao[] = [];
  private routeSub: Subscription = new Subscription();
  



  constructor(private service: PublicacaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.service.homepage(this.id).subscribe((publicacoes) => {
      this.publis = publicacoes;
    })
  }

}
