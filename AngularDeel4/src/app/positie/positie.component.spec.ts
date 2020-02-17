import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositieComponent } from './positie.component';

describe('PositieComponent', () => {
  let component: PositieComponent;
  let fixture: ComponentFixture<PositieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
