import { TestBed, async, inject } from '@angular/core/testing';

import { IsRegistratedGuard } from './is-registrated.guard';

describe('IsRegistratedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsRegistratedGuard]
    });
  });

  it('should ...', inject([IsRegistratedGuard], (guard: IsRegistratedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
