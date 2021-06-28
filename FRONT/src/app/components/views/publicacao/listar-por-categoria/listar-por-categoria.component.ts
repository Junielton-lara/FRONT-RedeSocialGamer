import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Publicacao } from 'src/app/models/publicacao';
import { PublicacaoService } from 'src/app/services/publicacao.service';

@Component({
  selector: 'app-listar-por-categoria',
  templateUrl: './listar-por-categoria.component.html',
  styleUrls: ['./listar-por-categoria.component.css']
})
export class ListarPorCategoriaComponent implements OnInit {
  publis : Publicacao[] = [];
  id!: string;
  private routeSub: Subscription = new Subscription();

  constructor(private service: PublicacaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.service.listarPorCategoria(this.id).subscribe((publis) =>{
    this.publis = publis;
  });
}

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
