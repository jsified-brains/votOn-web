import { TestBed, inject } from '@angular/core/testing';

import { MockBackEndInterceptorService } from './mock-back-end-interceptor.service';

describe('MockBackEndInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockBackEndInterceptorService]
    });
  });

  it('should be created', inject([MockBackEndInterceptorService], (service: MockBackEndInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
