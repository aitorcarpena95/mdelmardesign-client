import { TestBed } from '@angular/core/testing';

import { EShopService } from './e-shop.service';

describe('EShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EShopService = TestBed.get(EShopService);
    expect(service).toBeTruthy();
  });
});
