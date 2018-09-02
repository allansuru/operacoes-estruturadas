import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TravaHorizontalLinhaService {

  constructor(private db: AngularFireDatabase) { }


  getTravaHorizontalLinha_H_I() {
    return this.db.list('/TravaHorizontalDeLinha/H_I');
  }

  getTravaHorizontalLinha_I_J() {
    return this.db.list('/TravaHorizontalDeLinha/I_J');
  }

  getTravaHorizontalLinha_J_K() {
    return this.db.list('/TravaHorizontalDeLinha/J_K');
  }

}
