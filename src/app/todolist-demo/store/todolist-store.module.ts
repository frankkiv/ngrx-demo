import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/todolist.reducer';
import { TodolistEffects } from './effects/todolist.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('userlistreducers', reducer),
    EffectsModule.forFeature([TodolistEffects]),
  ],
  providers: []
})
export class TodolistStoreModule {}
