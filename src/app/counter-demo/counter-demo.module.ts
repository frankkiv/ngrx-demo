import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CounterDemoRoutingModule } from './counter-demo-routing.module';
import { CounterNumComponent } from './component/counter-num/counter-num.component';
//import { numReducer } from './store/reducer/num.reducer';
import { reducers } from './store/selector/selectors';

@NgModule({
  declarations: [CounterNumComponent],
  imports: [
    CommonModule,
    CounterDemoRoutingModule,
    StoreModule.forFeature('reducer',reducers),
  ]
})
export class CounterDemoModule { }
