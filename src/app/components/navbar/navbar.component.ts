import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;
  loading = false;
  loginModal = false;

  constructor(private User: UserService, private Token: TokenService,
    private router: Router, private Auth: AuthService) { }

  onSubmit() {
    this.loading = true;
    this.User.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => {
        this.loading = false;
        this.handleError(error);
      }
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/perfil');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  openModal() {
    this.loginModal = !this.loginModal;
  }

  ngOnInit() {
  }

}
