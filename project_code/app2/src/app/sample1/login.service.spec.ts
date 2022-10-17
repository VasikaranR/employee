import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  beforeEach(() => {

    const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new LoginService(httpSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
