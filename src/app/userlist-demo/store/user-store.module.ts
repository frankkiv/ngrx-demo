import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('reducer', reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: []
})
export class UserStoreModule {}
