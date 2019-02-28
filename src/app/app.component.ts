import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'while-admin';

  constructor(private router: Router) { }

  withHeader() {
    if (this.router.url === '/cadastro' || this.router.url === '/cadastro-dados-pessoais'
        || this.router.url === '/cadastro-telefone' || this.router.url === '/cadastro-interesses') {
          return false;
    } else {
      return true;
    }
  }

  withFooter() {
    if (this.router.url === '/cadastro' || this.router.url === '/cadastro-dados-pessoais'
      || this.router.url === '/cadastro-telefone' || this.router.url === '/cadastro-interesses' ||
      this.router.url === '/favoritos' || this.router.url === '/busca') {
      return false;
    } else {
      return true;
    }
  }
}
