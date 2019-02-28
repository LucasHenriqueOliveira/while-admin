import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroDadosPessoaisComponent } from './components/cadastro-dados-pessoais/cadastro-dados-pessoais.component';
import { CadastroTelefoneComponent } from './components/cadastro-telefone/cadastro-telefone.component';
import { CadastroInteressesComponent } from './components/cadastro-interesses/cadastro-interesses.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContatoComponent } from './components/contato/contato.component';
import { AboutComponent } from './components/about/about.component';
import { BuscaComponent } from './components/busca/busca.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'cadastro-dados-pessoais',
    component: CadastroDadosPessoaisComponent,
  },
  {
    path: 'cadastro-telefone',
    component: CadastroTelefoneComponent,
  },
  {
    path: 'cadastro-interesses',
    component: CadastroInteressesComponent,
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'busca',
    component: BuscaComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
