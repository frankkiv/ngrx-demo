import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/userlist.services';
import * as featureActions from '../../store/actions/userlist.actions';
import * as faetureSelectors from '../../store/selectors/userlist.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  datalist$;

  constructor(private service: UserListService, private store$: Store<any>) { }

  ngOnInit() {
    // this.service.getUsers().subscribe();
    this.store$.dispatch(
      new featureActions.LoadRequestAction()
    );
    this.datalist$ = this.store$.select(faetureSelectors.getDatas);
  }



}
