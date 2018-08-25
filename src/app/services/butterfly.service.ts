import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ButterflyService {

  constructor(private db: AngularFireDatabase) { }

  // Butterfly
  getButterflyI() {
    return this.db.list('/Butterfly/I');
  }
  getButterflyJ() {
    return this.db.list('/Butterfly/J');
  }
  getButterflyK() {
    return this.db.list('/Butterfly/K');
  }

}
