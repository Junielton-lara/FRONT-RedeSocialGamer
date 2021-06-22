import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostarComponent } from './components/views/publicacao/postar/postar.component';
import { ListarComponentPub } from './components/views/publicacao/listar/listar.component';
import { CadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { CriarComponent } from './components/views/categoria/criar/criar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostarComponent,
    ListarComponentPub,
    CadastrarComponent,
    CriarComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
