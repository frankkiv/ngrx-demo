import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UserlistStoreModule } from '../store/userlist-store.module';
import { MatCheckboxModule, MatListModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { UserlistComponent } from '../component/userlist/userlist.component';
import { BoardComponent } from '../component/board/board.component';

export const NgMatModule = [
  MatCheckboxModule,
  MatListModule,
  MatSelectModule
];

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgMatModule,
        FormsModule,
        UserlistStoreModule,
      ],
      declarations: [ ContainerComponent, UserlistComponent, BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
