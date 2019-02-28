import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroDadosPessoaisComponent } from './components/cadastro-dados-pessoais/cadastro-dados-pessoais.component';
import { CadastroTelefoneComponent } from './components/cadastro-telefone/cadastro-telefone.component';
import { CadastroInteressesComponent } from './components/cadastro-interesses/cadastro-interesses.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContatoComponent } from './components/contato/contato.component';
import { AboutComponent } from './components/about/about.component';
import { BuscaComponent } from './components/busca/busca.component';
import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { PerfilComponent } from './components/perfil/perfil.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CadastroComponent,
    CadastroDadosPessoaisComponent,
    CadastroTelefoneComponent,
    CadastroInteressesComponent,
    FavoritosComponent,
    FaqComponent,
    ContatoComponent,
    AboutComponent,
    BuscaComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    UserService,
    TokenService,
    AuthService,
    BeforeLoginService,
    AfterLoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
