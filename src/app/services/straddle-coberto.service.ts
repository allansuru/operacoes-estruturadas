import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class StraddleCobertoService {

  constructor(private db: AngularFireDatabase) { }

  getStraddleCobertoK_W() {
    return this.db.list('/StraddleVendidoCoberto/K_W');
  }
  getStraddleCobertoI_U() {
    return this.db.list('/StraddleVendidoCoberto/I_U');
  }
  getStraddleCobertoJ_V() {
    return this.db.list('/StraddleVendidoCoberto/J_V');
  }

}
