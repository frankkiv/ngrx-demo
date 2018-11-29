import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import { TodoListService } from '../../services/todolist.services';
import * as featureActions from '../actions/todolist.actions';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class TodolistEffects {

  constructor(private dataService: TodoListService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.ofType<featureActions.LoadRequestAction>(
      featureActions.TodolistActionTypes.LOAD_REQUEST
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
      featureActions.TodolistActionTypes.CONTENT_UPDATE
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
