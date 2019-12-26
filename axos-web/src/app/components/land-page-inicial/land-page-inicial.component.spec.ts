import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPageInicialComponent } from './land-page-inicial.component';

describe('LandPageInicialComponent', () => {
  let component: LandPageInicialComponent;
  let fixture: ComponentFixture<LandPageInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandPageInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPageInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
