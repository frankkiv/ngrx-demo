import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as featureActions from './../actions/user.action';
import { Observable, of,  } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from './../../services/user.services';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userservice: UserService) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.ofType<featureActions.LoadRequestAction>(
      featureActions.UserActionTypes.LOAD_REQUEST
    ).pipe(
      // startWith(new featureActions.LoadRequestAction()),
      // setInterval 5sec polling again
      // switchMap(action => timer(0, 5000).pipe(mapTo(action))),
      switchMap(action => this.userservice.getUsers()
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

  @Effect({dispatch: false})
  updateUser$ = this.actions$.ofType(featureActions.UserActionTypes.UPDATE_USER)
      .pipe(
          map((action: featureActions.UpdateUser) => this.userservice.updateUser(action.payload))
      );

  @Effect()
  userUpdated$: Observable<Action> =
      this.userservice.userUpdated$
      .pipe(
        switchMap(user => {
            console.log(user);
            return of(new featureActions.UserUpdated(user));
          }
        )
      );

  @Effect()
  userAdded$: Observable<Action> =
      this.userservice.userAdded$
      .pipe(
        switchMap(user => {
            console.log(user);
            return of(new featureActions.UserAdded(user));
          }
        )
      );
}
