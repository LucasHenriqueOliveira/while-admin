import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'while-admin';
  withHeader = true;
  withFooter = true;

  constructor(private router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        if (event.url === '/cadastro' || event.url === '/cadastro-dados-pessoais'
        || event.url === '/cadastro-telefone' || event.url === '/cadastro-interesses') {
          this.withHeader = false;
          this.withFooter = false;
        }
      }
    });
  }
}
