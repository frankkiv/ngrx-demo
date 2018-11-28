import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserlistStoreModule } from '../../store/userlist-store.module';
import { MatCheckboxModule, MatListModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const NgMatModule = [
  MatCheckboxModule,
  MatListModule,
  MatSelectModule
];

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

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
      declarations: [ UserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
