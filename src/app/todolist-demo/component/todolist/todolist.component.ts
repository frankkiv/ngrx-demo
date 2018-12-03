import { Component, OnInit } from '@angular/core';
import * as featureActions from '../../store/actions/todolist.actions';
import * as featureSelectors from '../../store/selectors/todolist.selector';
import { Store, select } from '@ngrx/store';
import { filter, map  } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  title = 'TODO List Componet';
  userdatas$;
  userlist$;
  selectedUser = null;

  constructor( private store$: Store<any>) {}

  ngOnInit() {
    this.store$.dispatch(
      new featureActions.LoadRequestAction()
    );


    // get user list and add All in the top of array
    this.userlist$ = this.store$.pipe(
      select(featureSelectors.getUsers),
      map((items) => {
        // console.log(items);
        items.unshift({userId: 'All'});
        return items;
      }
    ));
    this.userdatas$ = this.store$.pipe(select(featureSelectors.getUserDatas));
    // set default query to all
    this.selectedUser = 'All';
  }

  checkItem(item) {
    this.store$.dispatch(
      new featureActions.ItemCheckAction({data: item})
    );
  }

}
