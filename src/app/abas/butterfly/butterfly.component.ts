import { Butterfly } from './../../models/butterfly';
import { Component, OnInit, Input } from '@angular/core';
import { ButterflyService } from '../../services/butterfly.service';
import * as _ from 'underscore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'butterfly',
  templateUrl: './butterfly.component.html',
  styleUrls: ['./butterfly.component.scss']
})
export class ButterflyComponent implements OnInit {

  dados;
  ordem = false;
  coluna = '';
  seta = '';
  dados_aux: Butterfly[] = [];
  serie = 'I';

  constructor(public servico: ButterflyService) { }

  ngOnInit() {

   this.getButterflyI();
  }

  getButterflyI() {
    this.servico.getButterflyI()
    .subscribe(itens => {
      this.dados_aux = itens;
      this.dados = itens;
      console.log('Butterfly: ', this.dados_aux);
    });
  }

  getButterflyJ() {
    this.servico.getButterflyJ()
    .subscribe(itens => {
      this.dados_aux = itens;
    });
  }

  getButterflyK() {
    this.servico.getButterflyK()
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

    if (this.serie === 'I') {
        this.getButterflyI();
    } else if (this.serie === 'J') {
      this.getButterflyJ();
    } else if (this.serie === 'K') {
      this.getButterflyK();
    }

  }

}
