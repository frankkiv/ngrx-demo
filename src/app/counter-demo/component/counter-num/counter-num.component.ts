import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSelect from '../../store/selector/selectors';
import * as fromAction from '../../store/action/num.actions';
// import { numReducer } from '../../store/reducer/num.reducer';

@Component({
  selector: 'app-counter-num',
  templateUrl: './counter-num.component.html',
  styleUrls: ['./counter-num.component.scss']
})
export class CounterNumComponent implements OnInit {
  title: String = 'CounterNumComponent';
  num: number;
  addNumber = 1;
  subNumber = 1;
  counter$;
  counter;
  constructor(private _store: Store<any>) {
    this.counter$ = this._store.select(fromSelect.getCount);
    // any change you will be notified, if you select the reducer directly.
    // Highly not recommend this way.
    // this.counter = this._store.select('reducer').subscribe(res => {
    //   console.log(res.counter);
    // });
  }

  ngOnInit() {}

  add() {
    // this._store.dispatch({
    //   type: NumActionType.add,
    //   payload: {
    //     data: this.checkNum(this.addNumber)
    //   }
    // });
    this._store.dispatch(new fromAction.ADD({data: this.checkNum(this.addNumber)}));
  }
  sub() {
    // this._store.dispatch({
    //   type: NumActionType.subtract,
    //   payload: {
    //     data: this.checkNum(this.subNumber)
    //   }
    // });
    this._store.dispatch(new fromAction.SUB({data: this.checkNum(this.subNumber)}));
  }
  checkNum(num) {
    let res = 1;
    if (Number(num) !== NaN) {
      res = Number(num);
    }
    return res;
  }
}

