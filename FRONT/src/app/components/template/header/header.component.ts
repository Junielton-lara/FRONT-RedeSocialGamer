import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  id = localStorage.getItem('_id');
  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.id)
  }

  logout(): void{
    this.service.logout();
    console.log(this.id)
  }

}
