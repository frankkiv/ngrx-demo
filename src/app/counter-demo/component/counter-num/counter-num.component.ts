import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NumActionType } from '../../store/action/num.actions';
import * as fromSelect from '../../store/selector/selectors';
import { Observable } from 'rxjs';
//import { numReducer } from '../../store/reducer/num.reducer';

@Component({
  selector: 'app-counter-num',
  templateUrl: './counter-num.component.html',
  styleUrls: ['./counter-num.component.scss']
})
export class CounterNumComponent implements OnInit {
  num: Number;
  counter$: Observable<any>;
  counter

  constructor(private _store:Store<any>) {
    /*this.counter$ = this._store.select('numReducer').subscribe(mNum => {    //涉及到rxjs。    
      console.log(mNum.numReducer);
      this.num = mNum.numReducer;
    });*/
    /*this._store.select(fromSelect.getCount).subscribe(res=>{
      console.log(res);
      this.counter = res
    })*/
   }
    
  ngOnInit() {
    this.counter$ = this._store.select(fromSelect.getCount)
  }

  public add() {
    console.log('add');
    this._store.dispatch({          //調用dispatch觸發添加redurces
      type: NumActionType.add
    });
  }
  
  public sub() {
    console.log('sub');
    this._store.dispatch({          //調用dispatch觸發添加redurces
      type: NumActionType.subtract
    });
  }
 
  ngOnDestroy() {
    //this.counter$.unsubscribe();
  }
}
