import { Component, OnInit, Input } from '@angular/core';
import { CalendarButterflyService } from '../../service/calendar-buttlerfly.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'calendar-butterfly',
  templateUrl: './calendar-butterfly.component.html',
  styleUrls: ['./calendar-butterfly.component.scss']
})
export class CalendarButterflyComponent implements OnInit {
  @Input() dados;

  dados_aux: any [];
  serie = 'H/I';

  constructor(public calendarButService: CalendarButterflyService) { }

  ngOnInit() {

   this.getCalendarButterflyH_I();
  }

  getCalendarButterflyH_I() {
    this.calendarButService.getCalendarButterflyH_I()
    .subscribe(itens => {
      this.dados_aux = itens;
      console.log('Calendar-Butterfly: ', this.dados_aux);
    });
  }

  getCalendrButterflyI_J() {
    this.calendarButService.getCalendarButterflyI_J()
    .subscribe(itens => {
      this.dados_aux = itens;
    });
  }

  getButterflyJ_K() {
    this.calendarButService.getCalendarButterflyJ_K()
    .subscribe(itens => {
      this.dados_aux = itens;
    });
  }


  changeSerie(e) {
    this.serie = e.value;
    this.dados_aux = [];

    if (this.serie === 'H/I') {
        this.getCalendarButterflyH_I();
    } else if (this.serie === 'I/J') {
      this.getCalendrButterflyI_J();
    } else if (this.serie === 'J/K') {
      this.getButterflyJ_K();
    }

  }

}
