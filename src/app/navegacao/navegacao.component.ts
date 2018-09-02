import { Assinante } from './../models/assinante';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../assinante/services/auth.service';

@Component({
  selector: 'navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {
  assinante: Assinante;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.assinante = appUser;
    });
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
