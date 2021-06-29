import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.css']
})
export class RemoverComponent implements OnInit {

  id!: string;
  categoria!: Categoria;

  private routeSub: Subscription = new Subscription();
  constructor(private service: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.service.listarPorId(this.id).subscribe((categoria) =>{
      this.categoria = categoria;
    });
  }

  remover(): void{
    this.service.deletar(this.id).subscribe((categoria) =>{
      this.categoria = categoria;
    })
  }

}
