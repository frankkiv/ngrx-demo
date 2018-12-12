import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistDemoRoutingModule } from './userlist-demo-routing.module';
import { UserStoreModule } from './store/user-store.module';

import { ContainerComponent } from './container/container.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';

import {MatListModule, MatIconModule} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [ContainerComponent, UserlistComponent, UserdetailComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    NgxDatatableModule,
    UserlistDemoRoutingModule,
    UserStoreModule
  ]
})
export class UserlistDemoModule { }
