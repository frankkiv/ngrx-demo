import { Component, OnInit } from '@angular/core';
import * as featureActions from '../../store/actions/userlist.actions';
import * as featureSelectors from '../../store/selectors/userlist.selector';
import { Store, select } from '@ngrx/store';
import { filter, map  } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  title = 'TODO List Componet';
  datalist$;
  userdatas$;
  userlist$;
  selectedUser = null;

  constructor( private store$: Store<any>) {}

  ngOnInit() {
    this.store$.dispatch(
      new featureActions.LoadRequestAction()
    );

    // this.datalist$ = this.store$.select(featureSelectors.getDatas);
    this.userdatas$ = this.store$.pipe(select(featureSelectors.getUserDatas));
    // get user list and add All in the top of array
    this.userlist$ = this.store$.pipe(
      select(featureSelectors.getUsers),
      map((items) => {
        console.log(items);
        items.unshift({userId: 'All'});
        return items;
      }
    ));
    // set default query to all
    this.selectedUser = 'All';

  }

  checkItem(item) {
    this.store$.dispatch(
      new featureActions.ItemCheckAction({data: item})
    );
  }

}
