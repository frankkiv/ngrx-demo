import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CounterNumComponent } from './counter-num.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/selector/selectors';


describe('CounterNumComponent', () => {
  let component: CounterNumComponent;
  let fixture: ComponentFixture<CounterNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('reducer', reducers),
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
