import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllusersService } from './allusers.service';

describe('AllusersService', () => {
  let service: AllusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(AllusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
