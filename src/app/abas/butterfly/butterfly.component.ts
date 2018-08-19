import { Butterfly } from './../../models/butterfly';
import { Component, OnInit, Input } from '@angular/core';
import { ButterflyService } from '../../service/butterfly.service';

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



  constructor(public servico: ButterflyService) { }

  ngOnInit() {
    console.log('Butterfly: ', this.dados);
   this.getButterflyI();
  }

  getButterflyI() {
    this.servico.getButterflyI()
    .subscribe(itens => {
      this.dados_aux = itens;
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


  changeSerie(e) {
    this.serie = e.value;
    this.dados_aux = [];

    if (this.serie === 'I') {
        this.getButterflyI();
    } else if (this.serie === 'J') {
      this.getButterflyJ();
    } else if (this.serie === 'K') {
      this.getButterflyK();
    }

  }

}
