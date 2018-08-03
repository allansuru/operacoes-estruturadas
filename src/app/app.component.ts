import { Component, OnInit } from '@angular/core';
import { ServicosService } from './service/servicos.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dados: any;
  serie = '';
  strikes: any[] = [];


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
    this.servicos.getCalendarButerfly().subscribe(d => {
      this.dados = d;

      this.serie = d[0]['Serie'];
      console.log('Dados: ', this.dados);
      console.log('Serie: ', this.serie);
      this.filtrarStrike(this.dados);
    });
  }

  filtrarStrike(strike) {
        strike.filter(s => {
          this.strikes.push(s.asa_inferior.Strike);
          this.strikes.push(s.miolo.Strike);
          this.strikes.push(s.asa_superior.Strike);
        });
  }

}
