import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import { UserListService } from '../../services/userlist.services';
import * as featureActions from '../actions/userlist.actions';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class UserlistEffects {

  constructor(private dataService: UserListService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.ofType<featureActions.LoadRequestAction>(
      featureActions.UserlistActionTypes.LOAD_REQUEST
    ).pipe(
      // startWith(new featureActions.LoadRequestAction()),
      switchMap(action => this.dataService.getUsers()
          .pipe(
            map(
              items => {
                // console.log(items);
                return new featureActions.LoadSuccessAction({
                  items
                });
              }
              ),
              catchError(error =>
                of(new featureActions.LoadFailureAction({ error }))
              ))
      )
  );

  @Effect()
  contentUpdateEffect$: Observable<Action> = this.actions$.ofType<featureActions.ContentUpdateAction>(
      featureActions.UserlistActionTypes.CONTENT_UPDATE
    ).pipe(
      switchMap(action => this.dataService.updateContent()
          .pipe(
            map(() => new featureActions.ContentUpdateSuccessAction({ data: null})),
            catchError(error =>
              of(new featureActions.ContentUpdateFailureAction({ error }))
            ))
      )
  );
}
