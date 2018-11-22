import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { CounterDemoRoutingModule } from './counter-demo-routing.module';
import { CounterNumComponent } from './component/counter-num/counter-num.component';
// import { numReducer } from './store/reducer/num.reducer';
import { reducers } from './store/selector/selectors';
import { DisplayComponent } from './component/display/display.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [CounterNumComponent, DisplayComponent, ContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CounterDemoRoutingModule,
    StoreModule.forFeature('reducer', reducers),
  ]
})
export class CounterDemoModule { }
