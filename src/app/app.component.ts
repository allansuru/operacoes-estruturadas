import { CabecalhoService } from './service/cabecalho.service';
import { Component, OnInit } from '@angular/core';
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
  aba = 'Butterfly'; // vou start com a butterfly
  cabecalho: any[];

  constructor(
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
    this.aba = 'Calendar Butterfly';

  }



}
