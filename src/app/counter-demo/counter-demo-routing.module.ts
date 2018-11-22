import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterNumComponent } from './component/counter-num/counter-num.component';

const routes: Routes = [
  {
    path: '',
    component: CounterNumComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterDemoRoutingModule { }
