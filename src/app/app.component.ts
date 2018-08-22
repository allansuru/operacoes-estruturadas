import { CabecalhoService } from './service/cabecalho.service';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from './service/servicos.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTabChangeEvent } from '@angular/material';
import { CalendarButerfly } from './models/calendar-butterfly';
import { Butterfly } from './models/butterfly';
import { Cabecalho } from './models/cabecalho';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dados: CalendarButerfly[];
  aba = 'Butterfly'; // vou start com a butterfly
  cabecalho: Cabecalho[];

  constructor(
    public servicos: ServicosService,
    public cabecalhoService: CabecalhoService
  ) {}

  ngOnInit() {
    this.butterfly();
    this.getCabecalho();
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
     if (tabChangeEvent.tab.textLabel === 'Calendar Butterfly') {
        this.calendarButerfly();
     } else if (tabChangeEvent.tab.textLabel === 'Butterfly') {
       this.butterfly();
     }
  }

  butterfly() {
      this.aba = 'Butterfly';
  }

  getCabecalho() {
    this.cabecalhoService.getCabecalho()
    .subscribe(item => {
      this.cabecalho = item;
    });
  }

  calendarButerfly() {
    this.servicos.getCalendarButerfly()
    .subscribe((d: CalendarButerfly[]) => {
      this.dados = d; // All
      this.aba = 'Calendar Butterfly';
    });
  }



}
