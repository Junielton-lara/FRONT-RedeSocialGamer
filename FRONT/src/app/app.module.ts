import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/views/publicacao/homepage/homepage.component';
import { ListarPorCategoriaComponent } from './components/views/publicacao/listar-por-categoria/listar-por-categoria.component';
import { ListarPorAutorComponent } from './components/views/publicacao/listar-por-autor/listar-por-autor.component';
import { LogarComponent } from './components/views/logar/logar.component';
import { EditarComponent } from './components/views/categoria/editar/editar.component';
import { RemoverComponent } from './components/views/categoria/remover/remover.component';



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
    ContentComponent,
    HomepageComponent,
    ListarPorCategoriaComponent,
    ListarPorAutorComponent,
    LogarComponent,
    EditarComponent,
    RemoverComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
