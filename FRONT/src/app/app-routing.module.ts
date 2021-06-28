import { HomepageComponent } from './components/views/publicacao/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './components/views/categoria/criar/criar.component';
import { ListarComponentCat } from './components/views/categoria/listar/listar.component';
import { ListarComponentPub } from './components/views/publicacao/listar/listar.component';
import { PostarComponent } from './components/views/publicacao/postar/postar.component';
import { CadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { ListarComponentUsu } from './components/views/usuarios/listar/listar.component';
import { ListarPorCategoriaComponent } from './components/views/publicacao/listar-por-categoria/listar-por-categoria.component';
import { ListarPorAutorComponent } from './components/views/publicacao/listar-por-autor/listar-por-autor.component';
import { LogarComponent } from './components/views/logar/logar.component';



const routes: Routes = [
  {
    //Rota para cadastrar usuarios 
    path: 'usuarios/cadastrar',
    component: CadastrarComponent
  },
  {
    //Rota para listar usuarios 
    path: 'usuarios/listar',
    component: ListarComponentUsu
  },
  {
    //Rota para criar categoria
    path: 'categorias/criar',
    component: CriarComponent
  },
  {
    //Rota para listar categoria
    path: 'categorias/listar',
    component: ListarComponentCat
  },
  {
    //Rota para postar publicação
    path: 'publicacoes/postar/:id',
    component: PostarComponent
  },
  {
    //Rota para listar publicação
    path: ':id',
    component: HomepageComponent
  },
  {
    path: 'publicacoes/listar',
    component: ListarComponentPub
  },
  {
    path: 'publicacoes/listar/categoria/:id',
    component: ListarPorCategoriaComponent
  },
  {
    path: 'publicacoes/listar/autor/:id',
    component: ListarPorAutorComponent
  },
  {
    path: 'usuarios/login',
    component: LogarComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
