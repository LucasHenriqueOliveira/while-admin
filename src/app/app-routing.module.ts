import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroDadosPessoaisComponent } from './components/cadastro-dados-pessoais/cadastro-dados-pessoais.component';
import { CadastroTelefoneComponent } from './components/cadastro-telefone/cadastro-telefone.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
