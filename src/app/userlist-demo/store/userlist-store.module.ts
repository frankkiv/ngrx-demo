import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/userlist.reducer';
import { UserlistEffects } from './effects/userlist.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('userlistreducers', reducer),
    EffectsModule.forFeature([UserlistEffects])
  ],
  providers: []
})
export class UserlistStoreModule {}
