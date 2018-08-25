import './../polyfills';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material.module/material.module';
import { CalendarButterflyComponent } from './abas/calendar-butterfly/calendar-butterfly.component';
import { ButterflyComponent } from './abas/butterfly/butterfly.component';
import { ButterflyService } from './services/butterfly.service';
import { CabecalhoService } from './services/cabecalho.service';
import { CalendarButterflyService } from './services/calendar-buttlerfly.service';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RatioTemporalCallComponent } from './abas/ratio-temporal-call/ratio-temporal-call.component';
import { RatioTemporalCallService } from './services/ratio-temporal-call.service';

@NgModule({

  declarations: [
    AppComponent,
    CalendarButterflyComponent,
    ButterflyComponent,
    CabecalhoComponent,
    RatioTemporalCallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: 'Home', component: AppComponent},
    ])
  ],
  providers: [
    ButterflyService,
    CabecalhoService,
    CalendarButterflyService,
    RatioTemporalCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);