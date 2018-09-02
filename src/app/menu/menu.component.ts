import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../assinante/services/auth.service';
import { Assinante } from '../models/assinante';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
assinante: Assinante;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getAssinante();
  }

  getAssinante() {
    this.authService.appUser$.subscribe(assinante => {
      this.assinante = assinante;
    });
  }
}
