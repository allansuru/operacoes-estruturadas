import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CabecalhoService {

  constructor(private db: AngularFireDatabase) { }

  getCabecalho() {
    return this.db.list('PETR4');
  }

}
