import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RatioTemporalCallService {

  constructor(private db: AngularFireDatabase) { }

  getRatioTemporalCallH_I() {
    return this.db.list('/RatioTemporalCall/H_I');
  }
  getRatioTemporalCallI_J() {
    return this.db.list('/RatioTemporalCall/I_J');
  }
  getRatioTemporalCallJ_K() {
    return this.db.list('/RatioTemporalCall/J_K');
  }
}
