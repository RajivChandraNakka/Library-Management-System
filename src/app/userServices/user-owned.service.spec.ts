import { TestBed } from '@angular/core/testing';

import { UserOwnedService } from './user-owned.service';

describe('UserOwnedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserOwnedService = TestBed.get(UserOwnedService);
    expect(service).toBeTruthy();
  });
});
