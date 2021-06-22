import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './components/views/categoria/criar/criar.component';
import { ListarComponentCat } from './components/views/categoria/listar/listar.component';
import { ListarComponentPub } from './components/views/publicacao/listar/listar.component';
import { PostarComponent } from './components/views/publicacao/postar/postar.component';
import { CadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { ListarComponentUsu } from './components/views/usuarios/listar/listar.component';



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
    path: 'publicacoes/postar',
    component: PostarComponent
  },
  {
    //Rota para listar publicação
    path: '',
    component: ListarComponentPub
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
