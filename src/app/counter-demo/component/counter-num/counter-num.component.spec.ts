import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNumComponent } from './counter-num.component';
import { StoreModule } from '@ngrx/store';

describe('CounterNumComponent', () => {
  let component: CounterNumComponent;
  let fixture: ComponentFixture<CounterNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({}),
      ],
      declarations: [ CounterNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
