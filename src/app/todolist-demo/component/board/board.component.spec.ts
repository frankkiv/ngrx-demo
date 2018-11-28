import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { MatCheckboxModule, MatListModule, MatSelectModule } from '@angular/material';
import { UserlistStoreModule } from '../../store/userlist-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

export const NgMatModule = [
  MatCheckboxModule,
  MatListModule,
  MatSelectModule
];

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule,
        NgMatModule,
        UserlistStoreModule,
      ],
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
