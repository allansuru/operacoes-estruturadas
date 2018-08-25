import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class CalendarButterflyService {

  constructor(private db: AngularFireDatabase) { }

  // Butterfly
  getCalendarButterflyH_I() {
    return this.db.list('/CalendarButterfly/H_I');
  }
  getCalendarButterflyI_J() {
    return this.db.list('/CalendarButterfly/I_J');
  }
  getCalendarButterflyJ_K() {
    return this.db.list('/CalendarButterfly/J_K');
  }

}
