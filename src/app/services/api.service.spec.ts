import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data from API', () => {
    const mockUserData = { login: 'deepti-chauhan', name: 'Deepti Chauhan' };
    const username = 'deepti-chauhan';
    const api = `https://api.github.com/users/${username}`;

    service.getUser(username).subscribe((user) => {
      expect(user).toEqual(mockUserData);
    });

    const req = httpMock.expectOne(api);
    expect(req.request.method).toBe('GET');
    req.flush(mockUserData);
  });
});
