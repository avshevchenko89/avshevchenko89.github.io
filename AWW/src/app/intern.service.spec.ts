/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternService } from './intern.service';

describe('Service: Intern', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternService]
    });
  });

  it('should ...', inject([InternService], (service: InternService) => {
    expect(service).toBeTruthy();
  }));
});
