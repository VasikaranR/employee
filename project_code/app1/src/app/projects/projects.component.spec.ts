import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { analytics } from '@angular-devkit/core';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let service: ProjectsService
  let content = [{
    assigned: "Vasikaran",
    budget: 3000000,
    description: " Smart home is the one of the projects of LG technologies ,It is one of the most formidable brands in consumer electronics, home appliances, IT hardware and mobile communications space.now by SMART House LG is expecting a fully fledged IOT application ",
    domain: "IOT",
    project_id: 1,
    project_name: "SMART HOUSE"
  }]
  let id='1'
  // let name=''

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ProjectsComponent],
      providers: [ProjectsService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(ProjectsService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should route to user', () => {
    const backTo = spyOn(component, 'backTo').and.callThrough();
    component.backTo();
    expect(backTo).toHaveBeenCalled()
  })

  it('a http call has to happen', () => {
    const projectList = spyOn(service, 'projectList').and.callThrough();
    component.ngOnInit();
    expect(projectList).toHaveBeenCalled()
  })

  // it('a http 2 call has to happen', () => {
  //   const allProjectDetail = spyOn(service, `allProjectDetails`).and.callThrough();
  //   component.details(content,id);
  //   expect(allProjectDetail).toHaveBeenCalled();
  // })
});
