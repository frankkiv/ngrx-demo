import { Component, OnInit } from '@angular/core';
import * as fromSelect from '../../store/selector/selectors';
import * as fromAction from '../../store/action/num.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  title: String = 'DisplayComponent';
  counter$;
  percounter$;
  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this.counter$ = this._store.select(fromSelect.getCount);
    this.percounter$ = this._store.select(fromSelect.getPrecount);
  }

}
