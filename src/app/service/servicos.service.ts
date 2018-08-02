import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ServicosService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/');
  }

  getCalendarButerfly() {
    return this.db.list('/CalendarButterfly');
  }

}
