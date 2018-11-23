import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistDemoRoutingModule } from './userlist-demo-routing.module';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserlistStoreModule } from './store/userlist-store.module';

@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,
    UserlistStoreModule,
    UserlistDemoRoutingModule,
  ]
})
export class UserlistDemoModule { }
