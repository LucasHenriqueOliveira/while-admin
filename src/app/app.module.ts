import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroDadosPessoaisComponent } from './components/cadastro-dados-pessoais/cadastro-dados-pessoais.component';
import { CadastroTelefoneComponent } from './components/cadastro-telefone/cadastro-telefone.component';
import { CadastroInteressesComponent } from './components/cadastro-interesses/cadastro-interesses.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
