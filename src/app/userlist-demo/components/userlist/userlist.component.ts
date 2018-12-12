import { Component, OnInit, ViewChild } from '@angular/core';
import * as featureActions from './../../store/actions/user.action';
import * as featureSelectors from './../../store/selectors/user.selector';
import { select, Store } from '@ngrx/store';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  columns = [
    { prop: 'id'},
    { name: 'name'},
    { name: 'ip'},
    { name: 'country'},
    { name: 'onlinestatus'}
  ];

  user$;
  online$;
  queryKeyword = '';

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private store$: Store<any>,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIcon(
      'sendmsg',
      this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/paper-plane.svg')
    );
  }

  ngOnInit() {
    this.store$.dispatch(new featureActions.LoadRequestAction());
    this.user$ = this.store$.pipe(
      select(featureSelectors.getPreviewData),
    );
    this.online$ = this.store$.pipe(
      select(featureSelectors.getPreviewStatus)
    );
  }

  updateFilter(event) {
    // Whenever the filter changes, always go back to the first page
    // console.log(event.target.value);
    this.queryKeyword = event.target.value;
    this.table.offset = 0;
  }
}
