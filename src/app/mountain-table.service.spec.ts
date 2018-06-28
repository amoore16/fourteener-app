import { TestBed, inject } from '@angular/core/testing';

import { MountainTableService } from './mountain-table.service';

describe('MountainTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MountainTableService]
    });
  });

  it('should be created', inject([MountainTableService], (service: MountainTableService) => {
    expect(service).toBeTruthy();
  }));
});
