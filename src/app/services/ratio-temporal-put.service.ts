import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RatioTemporalPutService {

  constructor(private db: AngularFireDatabase) { }

  getRatioTemporalPutT_U() {
    return this.db.list('/RatioTemporalPut/T_U');
  }
  getRatioTemporalPutU_V() {
    return this.db.list('/RatioTemporalPut/U_V');
  }
  getRatioTemporalPutV_W() {
    return this.db.list('/RatioTemporalPut/V_W');
  }

}
