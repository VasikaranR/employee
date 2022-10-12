import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let service:ProjectsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ ProjectsComponent ],
      providers:[ProjectsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.get(ProjectsService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should route to user',()=>{
    const backTo=spyOn(component,'backTo').and.callThrough();
    component.backTo();
    expect(backTo).toHaveBeenCalled()
  })

  it('a http call has to happen',()=>{
    const projectList=spyOn(service,'projectList').and.callThrough();
    component.ngOnInit();
    expect(projectList).toHaveBeenCalled()
  })

  it('a http 2 call has to happen',()=>{
    const allProjectDetails=spyOn(service,'allProjectDetails').and.callThrough
  })
});
