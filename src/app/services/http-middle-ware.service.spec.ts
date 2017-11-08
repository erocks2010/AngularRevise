import { TestBed, inject } from '@angular/core/testing';

import { HttpMiddleWareService } from './http-middle-ware.service';

describe('HttpMiddleWareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpMiddleWareService]
    });
  });

  it('should be created', inject([HttpMiddleWareService], (service: HttpMiddleWareService) => {
    expect(service).toBeTruthy();
  }));
});
