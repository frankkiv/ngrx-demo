import { Component, OnInit } from '@angular/core';
import * as featureActions from '../../store/actions/todolist.actions';
import * as featureSelectors from '../../store/selectors/todolist.selector';
import { Store, select } from '@ngrx/store';
import { map, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  title = 'Stastic Board Component';
  analytics$;
  userAnalytics$;
  constructor( private store$: Store<any>) { }

  ngOnInit() {
    this.analytics$ = this.store$.select(featureSelectors.getAnalytics);
    this.userAnalytics$ = this.store$.select(featureSelectors.getUserAnalytics);
    // this.store$.select(featureSelectors.getUserAnalytics).subscribe(item => console.log(item));
    // this.analytics$.subscribe()((item) => console.log(item));
    // this.datalist$ = this.store$.select(featureSelectors.getDatas);
  }

}
