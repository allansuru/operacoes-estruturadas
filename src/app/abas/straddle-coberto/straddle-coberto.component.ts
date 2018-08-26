import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { StraddleCobertoService } from '../../services/straddle-coberto.service';


@Component({
  selector: 'straddle-coberto',
  templateUrl: './straddle-coberto.component.html',
  styleUrls: ['./straddle-coberto.component.scss']
})
export class StraddleCobertoComponent implements OnInit {

  dados;
  ordem = false;
  coluna = '';
  seta = '';
  dados_aux: any[] = [];
  serie = 'I/U';

  constructor(public straddleService: StraddleCobertoService) { }

  ngOnInit() {

   this.getStraddleCobertoI_U();
  }

  getStraddleCobertoK_W() {
    this.straddleService.getStraddleCobertoK_W()
    .subscribe(itens => {
      this.dados_aux = itens;
      this.dados = itens;
      console.log('Straddle: ', this.dados_aux);
    });
  }

  getStraddleCobertoI_U() {
    this.straddleService.getStraddleCobertoI_U()
    .subscribe(itens => {
      this.dados_aux = itens;
      console.log('Straddle: ', this.dados_aux);
    });
  }

  getStraddleCobertoJ_V() {
    this.straddleService.getStraddleCobertoJ_V()
    .subscribe(itens => {
      this.dados_aux = itens;
    });
  }

  ordenar(coluna: string) {
    this.ordem = !this.ordem;
    this.coluna = coluna;
    if (this.ordem) {
      this.seta = 'arrow_drop_down';
      this.dados_aux = _.sortBy(this.dados_aux, coluna);
    } else {
      this.seta = 'arrow_drop_up';
      this.dados_aux = this.dados_aux.reverse();
    }
  }


  changeSerie(e) {
    this.serie = e.value;
    this.dados_aux = [];
    this.seta = '';

    if (this.serie === 'K/W') {
        this.getStraddleCobertoK_W();
    } else if (this.serie === 'I/U') {
      this.getStraddleCobertoI_U();
    } else if (this.serie === 'J/V') {
      this.getStraddleCobertoJ_V();
    }

  }

}
