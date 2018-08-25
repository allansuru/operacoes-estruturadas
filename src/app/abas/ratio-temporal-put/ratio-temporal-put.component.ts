import { Component, OnInit } from '@angular/core';
import { RatioTemporalPutService } from '../../services/ratio-temporal-put.service';
import * as _ from 'underscore';

@Component({
  selector: 'ratio-temporal-put',
  templateUrl: './ratio-temporal-put.component.html',
  styleUrls: ['./ratio-temporal-put.component.scss']
})
export class RatioTemporalPutComponent implements OnInit {

  ordem = false;
  coluna = '';
  seta = '';
  dados_aux: any [];
  serie = 'T/U';

  constructor(public ratioPutService: RatioTemporalPutService) { }

  ngOnInit() {
    this.getRatioPutT_U();
  }

  getRatioPutT_U() {
    this.ratioPutService.getRatioTemporalPutT_U()
    .subscribe(itens => {
      this.dados_aux = itens;
      console.log('RatioPut: ', this.dados_aux);
    });
  }

  getRatioPutU_V() {
    this.ratioPutService.getRatioTemporalPutU_V()
    .subscribe(itens => {
      this.dados_aux = itens;
    });
  }

  getRatioPutV_W() {
    this.ratioPutService.getRatioTemporalPutV_W()
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

    if (this.serie === 'T/U') {
        this.getRatioPutT_U();
    } else if (this.serie === 'U/V') {
      this.getRatioPutU_V();
    } else if (this.serie === 'V/W') {
      this.getRatioPutV_W();
    }

  }

}
