import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostarComponent } from './components/views/publicacao/postar/postar.component';
import { ListarComponentPub } from './components/views/publicacao/listar/listar.component';
import { ListarComponentCat } from './components/views/categoria/listar/listar.component';
import { ListarComponentUsu } from './components/views/usuarios/listar/listar.component';
import { CadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { CriarComponent } from './components/views/categoria/criar/criar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PostarComponent,
    ListarComponentPub,
    ListarComponentCat,
    ListarComponentUsu,
    CadastrarComponent,
    CriarComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
