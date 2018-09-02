import { Component, OnInit } from '@angular/core';
import { TravaHorizontalLinhaService } from '../../services/trava-horizontal-linha.service';
import * as _ from 'underscore';

@Component({
  selector: 'trava-horizontal-linha',
  templateUrl: './trava-horizontal-linha.component.html',
  styleUrls: ['./trava-horizontal-linha.component.scss']
})
export class TravaHorizontalLinhaComponent implements OnInit {


  dados;
  ordem = false;
  coluna = '';
  seta = '';
  dados_aux: any[] = [];
  serie = 'H/I';

  constructor(public travaHorizontalLinha: TravaHorizontalLinhaService) { }

  ngOnInit() {
    this.getTravaHorizontalLinha_H_I();
  }

  getTravaHorizontalLinha_H_I() {
    this.travaHorizontalLinha.getTravaHorizontalLinha_H_I()
    .subscribe(itens => {
      this.dados_aux = itens;
      this.dados = itens;
      console.log('Trava Horizontal Linha: ', this.dados_aux);
    });
  }

  getTravaHorizontalLinha_I_J() {
    this.travaHorizontalLinha.getTravaHorizontalLinha_I_J()
    .subscribe(itens => {
      this.dados_aux = itens;
      console.log('Straddle: ', this.dados_aux);
    });
  }

  getTravaHorizontalLinha_J_K() {
    this.travaHorizontalLinha.getTravaHorizontalLinha_J_K()
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

    if (this.serie === 'H/I') {
        this.getTravaHorizontalLinha_H_I();
    } else if (this.serie === 'I/J') {
      this.getTravaHorizontalLinha_I_J();
    } else if (this.serie === 'J/K') {
      this.getTravaHorizontalLinha_J_K();
    }

  }

}
