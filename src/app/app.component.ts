import { Component, OnInit } from '@angular/core';
import { ServicosService } from './service/servicos.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTabChangeEvent } from '@angular/material';
import { CalendarButerfly } from './models/calendar-butterfly';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dados: CalendarButerfly[];
  serie = '';
  strikes: any[] = [];
  montagens: any[] = [];
  precosEntrada: any[] = [];
  desmontagens: any[] = [];
  precosSaida: any[] = [];
  parametroMontagem: any[] = [];


  constructor(private servicos: ServicosService) {
  }

  ngOnInit() {
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
     if (tabChangeEvent.tab.textLabel === 'Calendar Butterfly') {
        this.calendarButerfly();
     }
  }


  calendarButerfly() {
  this.limpaDados();
    this.servicos.getCalendarButerfly()
    .subscribe((d: CalendarButerfly[]) => {
      this.dados = d.slice(0, 10);
      this.serie = d[0].Serie;
      console.log('Dados: ', this.dados);
      console.log('Serie: ', this.serie);
      this.filtrarStrike(this.dados);
      this.filtrarMontagem(this.dados);
      this.filtrarPrecoAtual(this.dados);
      this.filtrarDesmontagem(this.dados);
      this.filtrarPrecosSaida(this.dados);
      this.filtrarParametroMontagem(this.dados);
    });
  }

  filtrarStrike(strike) {
        strike.filter(s => {
          this.strikes.push(s.asa_inferior.Strike);
          this.strikes.push(s.miolo.Strike);
          this.strikes.push(s.asa_superior.Strike);
        });
  }

  filtrarMontagem(montagem) {
    montagem.filter(m => {
      this.montagens.push('+ 1 x' + m.asa_inferior.Valor_Bid);
      this.montagens.push('- 2 x' + m.miolo.Valor_Ask);
      this.montagens.push('+ 1 x' + m.asa_superior.Valor_Bid);
    });
  }

  filtrarPrecoAtual(preco: CalendarButerfly[]) {
    preco.filter(p => {
      this.precosEntrada.push(p.preco_entrada_atual);
    });
  }

  filtrarDesmontagem(desmontagem) {
    desmontagem.filter(des => {
      this.desmontagens.push('-1 x' + des.asa_inferior.Valor_Ask);
      this.desmontagens.push('+ 2 x' + des.miolo.Valor_Bid);
      this.desmontagens.push('- 1 x' + des.asa_superior.Valor_Ask);
    });
  }

  filtrarPrecosSaida(preco: CalendarButerfly[]) {
    preco.filter(pre => {
      this.precosSaida.push(pre.preco_saida_atual);
    });
  }

  filtrarParametroMontagem(pamMontagem: CalendarButerfly[]) {
    pamMontagem.filter(pam => {
      this.parametroMontagem.push(pam.preco_entrada_parametro);
    });
  }

  private limpaDados() {
    this.dados = [];
    this.strikes = [];
    this.montagens = [];
    this.precosEntrada = [];
    this.desmontagens = [];
    this.precosSaida = [];
    this.parametroMontagem = [];
  }


}
