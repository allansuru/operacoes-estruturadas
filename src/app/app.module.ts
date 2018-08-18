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
import { ServicosService } from './service/servicos.service';
import { CalendarButterflyComponent } from './abas/calendar-butterfly/calendar-butterfly.component';
import { ButterflyComponent } from './abas/butterfly/butterfly.component';

@NgModule({

  declarations: [
    AppComponent,
    CalendarButterflyComponent,
    ButterflyComponent
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
    ServicosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);