import { TestBed } from '@angular/core/testing';

import { AccountService } from './cuenta.service';

describe('CuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
