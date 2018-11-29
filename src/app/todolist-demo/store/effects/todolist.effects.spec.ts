import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodolistEffects } from './todolist.effects';
import { TodolistStoreModule } from '../todolist-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('TodolistEffects', () => {
  let actions$: Observable<any>;
  let effects: TodolistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TodolistStoreModule,
      ],
      providers: [
        TodolistEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TodolistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
