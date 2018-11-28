import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoListComponent } from './demo-list/demo-list.component';

const routes: Routes = [
  { path: 'counter', loadChildren: './counter-demo/counter-demo.module#CounterDemoModule' },
  { path: 'todolist', loadChildren: './todolist-demo/todolist-demo.module#TodolistDemoModule' },
  { path: '', component: DemoListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
