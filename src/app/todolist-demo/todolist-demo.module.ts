import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatListModule, MatCardModule, MatSelectModule} from '@angular/material';

import { TodolistDemoRoutingModule } from './todolist-demo-routing.module';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserlistStoreModule } from './store/userlist-store.module';
import { BoardComponent } from './component/board/board.component';
import { ContainerComponent } from './container/container.component';

export const NgMatModule = [
  MatCheckboxModule,
  MatListModule,
  MatSelectModule
];

@NgModule({
  declarations: [UserlistComponent, BoardComponent, ContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMatModule,
    UserlistStoreModule,
    TodolistDemoRoutingModule,
  ]
})
export class TodolistDemoModule { }
