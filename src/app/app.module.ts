import './../polyfills';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { CalendarButterflyComponent } from './abas/calendar-butterfly/calendar-butterfly.component';
import { ButterflyComponent } from './abas/butterfly/butterfly.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RatioTemporalCallComponent } from './abas/ratio-temporal-call/ratio-temporal-call.component';
import { RatioTemporalPutComponent } from './abas/ratio-temporal-put/ratio-temporal-put.component';
import { StraddleCobertoComponent } from './abas/straddle-coberto/straddle-coberto.component';

import { CalendarButterflyService } from './services/calendar-buttlerfly.service';
import { ButterflyService } from './services/butterfly.service';
import { CabecalhoService } from './services/cabecalho.service';
import { RatioTemporalCallService } from './services/ratio-temporal-call.service';
import { RatioTemporalPutService } from './services/ratio-temporal-put.service';
import { StraddleCobertoService } from './services/straddle-coberto.service';

import { MaterialModule } from './material.module/material.module';
import { TravaHorizontalLinhaComponent } from './abas/trava-horizontal-linha/trava-horizontal-linha.component';
import { TravaHorizontalLinhaService } from './services/trava-horizontal-linha.service';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AssinanteModule } from './assinante/assinante.module';

@NgModule({

  declarations: [
    AppComponent,
    CalendarButterflyComponent,
    ButterflyComponent,
    CabecalhoComponent,
    RatioTemporalCallComponent,
    RatioTemporalPutComponent,
    StraddleCobertoComponent,
    TravaHorizontalLinhaComponent,
    NavegacaoComponent
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
    AssinanteModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: AppComponent},
    ])
  ],
  providers: [
    ButterflyService,
    CabecalhoService,
    CalendarButterflyService,
    RatioTemporalCallService,
    RatioTemporalPutService,
    StraddleCobertoService,
    TravaHorizontalLinhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
