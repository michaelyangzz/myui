import { TestBed, inject } from '@angular/core/testing';

import { GlobalHttpService } from './global-http.service';

describe('GlobalHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalHttpService]
    });
  });

  it('should be created', inject([GlobalHttpService], (service: GlobalHttpService) => {
    expect(service).toBeTruthy();
  }));
});
