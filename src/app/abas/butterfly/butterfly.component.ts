import { Component, OnInit, Input } from '@angular/core';
import { Butterfly } from '../../models/butterfly';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'butterfly',
  templateUrl: './butterfly.component.html',
  styleUrls: ['./butterfly.component.scss']
})
export class ButterflyComponent implements OnInit {

  @Input() dados;

  dados_aux: Butterfly[] = [];
  serie = 'I';

  constructor() { }

  ngOnInit() {

    console.log('Dados Butterfly: ', this.dados[0]); // I
    this.dados_aux =  this.dados[0];

    console.log('todas séries: ', this.dados);

  }

  changeSerie(e) {
    this.serie = e.value;
    this.dados_aux = [];

    if (this.serie === 'I') {
      this.dados_aux = this.dados[0];
    } else if (this.serie === 'J') {
      this.dados_aux =  this.dados[1];
    } else if (this.serie === 'K') {
      this.dados_aux = this.dados[2];
    }

  }

}
