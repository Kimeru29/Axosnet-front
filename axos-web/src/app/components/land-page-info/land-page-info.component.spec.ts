import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPageInfoComponent } from './land-page-info.component';

describe('LandPageInfoComponent', () => {
  let component: LandPageInfoComponent;
  let fixture: ComponentFixture<LandPageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandPageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
