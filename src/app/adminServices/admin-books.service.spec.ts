import { TestBed } from '@angular/core/testing';

import { AdminBooksService } from './admin-books.service';

describe('AdminBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminBooksService = TestBed.get(AdminBooksService);
    expect(service).toBeTruthy();
  });
});
