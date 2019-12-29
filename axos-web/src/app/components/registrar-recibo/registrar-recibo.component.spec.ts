import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReciboComponent } from './registrar-recibo.component';

describe('RegistrarReciboComponent', () => {
  let component: RegistrarReciboComponent;
  let fixture: ComponentFixture<RegistrarReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
