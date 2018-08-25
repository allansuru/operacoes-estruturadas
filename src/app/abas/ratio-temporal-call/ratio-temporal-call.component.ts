import { Component, OnInit } from '@angular/core';
import { RatioTemporalCallService } from '../../services/ratio-temporal-call.service';
import * as _ from 'underscore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ratio-temporal-call',
  templateUrl: './ratio-temporal-call.component.html',
  styleUrls: ['./ratio-temporal-call.component.scss']
})
export class RatioTemporalCallComponent implements OnInit {

  ordem = false;
  coluna = '';
  seta = '';
  dados_aux: any [];
  serie = 'H/I';

  constructor(public ratioCallService: RatioTemporalCallService) { }

  ngOnInit() {
    this.getRatioCallH_I();
  }

  getRatioCallH_I() {
    this.ratioCallService.getRatioTemporalCallH_I()
    .subscribe(itens => {
      this.dados_aux = itens;
      console.log('Calendar-Butterfly: ', this.dados_aux);
    });
  }

  getRatioCallI_J() {
    this.ratioCallService.getRatioTemporalCallI_J()
    .subscribe(itens => {
      this.dados_aux = itens;
    });
  }

  getRatioCallJ_K() {
    this.ratioCallService.getRatioTemporalCallJ_K()
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
        this.getRatioCallH_I();
    } else if (this.serie === 'I/J') {
      this.getRatioCallI_J();
    } else if (this.serie === 'J/K') {
      this.getRatioCallJ_K();
    }

  }

}
