import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatGridListModule, MatButtonModule, MatInputModule } from '@angular/material';

import { CounterDemoRoutingModule } from './counter-demo-routing.module';
import { CounterNumComponent } from './component/counter-num/counter-num.component';
// import { numReducer } from './store/reducer/num.reducer';
import { reducers } from './store/selector/selectors';
import { DisplayComponent } from './component/display/display.component';
import { ContainerComponent } from './container/container.component';

export const NgMatModule = [
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  declarations: [CounterNumComponent, DisplayComponent, ContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMatModule,
    CounterDemoRoutingModule,
    StoreModule.forFeature('reducer', reducers),
  ]
})
export class CounterDemoModule { }
