import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatListModule, MatCardModule, MatSelectModule} from '@angular/material';

import { TodolistDemoRoutingModule } from './todolist-demo-routing.module';
import { TodolistComponent } from './component/todolist/todolist.component';
import { TodolistStoreModule } from './store/todolist-store.module';
import { BoardComponent } from './component/board/board.component';
import { ContainerComponent } from './container/container.component';

export const NgMatModule = [
  MatCheckboxModule,
  MatListModule,
  MatSelectModule
];

@NgModule({
  declarations: [TodolistComponent, BoardComponent, ContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMatModule,
    TodolistStoreModule,
    TodolistDemoRoutingModule,
  ]
})
export class TodolistDemoModule { }
