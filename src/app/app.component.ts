import { CabecalhoService } from './services/cabecalho.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatTabChangeEvent } from '@angular/material';
import { CalendarButerfly } from './models/calendar-butterfly';
import { UserService } from './assinante/services/user.service';
import { AuthService } from './assinante/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  aba = 'Butterfly'; // vou start com a butterfly
  cabecalho: any[];

  constructor(
    public cabecalhoService: CabecalhoService,
    private userService: UserService,
    private auth: AuthService,
    router: Router
  ) {
    auth.user$.subscribe(user => {
      debugger
      if (!user) { return; }
        userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) { return; }

        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);

    });
  }

  ngOnInit() {
    this.setAba(this.aba);
    this.getCabecalho();
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
     if (tabChangeEvent.tab.textLabel === 'Calendar Butterfly') {
         this.setAba(tabChangeEvent.tab.textLabel);
     } else if (tabChangeEvent.tab.textLabel === 'Butterfly') {
         this.setAba(tabChangeEvent.tab.textLabel);
     } else if (tabChangeEvent.tab.textLabel === 'Ratio Temporal - Call') {
         this.setAba(tabChangeEvent.tab.textLabel);
     } else if (tabChangeEvent.tab.textLabel === 'Ratio Temporal - Put') {
        this.setAba(tabChangeEvent.tab.textLabel);
     } else if (tabChangeEvent.tab.textLabel === 'Straddle Coberto') {
       this.setAba(tabChangeEvent.tab.textLabel);
     } else if (tabChangeEvent.tab.textLabel === 'Trava Horizontal de Linha') {
      this.setAba(tabChangeEvent.tab.textLabel);
    }
  }

  getCabecalho() {
    this.cabecalhoService.getCabecalho()
    .subscribe(item => {
      this.cabecalho = item;
    });
  }

 setAba(aba) {
    this.aba = aba;
 }

}
