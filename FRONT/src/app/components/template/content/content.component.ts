import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Usuario } from 'src/app/models/Usuario';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  id = localStorage.getItem("_id");


  constructor(private http: HttpClient, private service: CategoriaService) { }

  ngOnInit(): void {
  }

}
