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
  aba = '';


  constructor(public servicos: ServicosService) {
  }

  ngOnInit() {
    // this.servicos.getAll()
    // .subscribe(x => console.log('ALL', x));
    // this.servicos.getButterfly()
    // .subscribe(x => console.log('Butterfly', x));
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
     if (tabChangeEvent.tab.textLabel === 'Calendar Butterfly') {
        this.calendarButerfly();
     }
  }


  calendarButerfly() {
    this.servicos.getCalendarButerfly()
    .subscribe((d: CalendarButerfly[]) => {
      this.dados = d; // All
      this.aba = 'Calendar Butterfly';
    });
  }



}
