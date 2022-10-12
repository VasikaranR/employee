import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpSpy

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(ProjectsService);
  });
  beforeEach(() => {

    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new ProjectsService(httpSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
