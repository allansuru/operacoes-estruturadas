import { Component, OnInit } from '@angular/core';
import { ServicosService } from './service/servicos.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTabChangeEvent } from '@angular/material';
import { CalendarButerfly } from './models/calendar-butterfly';
import { Butterfly } from './models/butterfly';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dados: CalendarButerfly[];
  aba = 'Butterfly'; // vou start com a butterfly


  constructor(public servicos: ServicosService) {
  }

  ngOnInit() {
    this.butterfly();
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

  calendarButerfly() {
    this.servicos.getCalendarButerfly()
    .subscribe((d: CalendarButerfly[]) => {
      this.dados = d; // All
      this.aba = 'Calendar Butterfly';
    });
  }



}
