import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ContainerComponent } from './container.component';
import { DisplayComponent } from '../component/display/display.component';
import { CounterNumComponent } from '../component/counter-num/counter-num.component';
import { reducers } from '../store/selector/selectors';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('reducer', reducers),
      ],
      declarations: [ ContainerComponent, DisplayComponent, CounterNumComponent ]
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
