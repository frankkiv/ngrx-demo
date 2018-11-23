import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserlistEffects } from './userlist.effects';
import { UserlistStoreModule } from '../userlist-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('UserlistEffects', () => {
  let actions$: Observable<any>;
  let effects: UserlistEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        UserlistStoreModule,
      ],
      providers: [
        UserlistEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(UserlistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
