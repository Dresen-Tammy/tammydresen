import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectComponent } from './project.component';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { convertToParamMap, ParamMap, ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ViewportScroller } from '@angular/common';
import { ProjectService } from '../services/project.service';


export class ActivatedRouteStub {

  //Observable that contains a map of the parameters

  private _testParamMap: ParamMap;
  get testParamMap() {
      return this._testParamMap;
  }
  set testParamMap(params: {}) {
      this._testParamMap = convertToParamMap(params);
  }

  //Observable that contains a map of the query parameters
  private subjectQueryParamMap = new BehaviorSubject(convertToParamMap(this.testParamMap));
  queryParamMap = this.subjectQueryParamMap.asObservable();

  private _testQueryParamMap: ParamMap;
  get testQueryParamMap() {
      return this._testQueryParamMap;
  }
  set testQueryParamMap(params: {}) {
      this._testQueryParamMap = convertToParamMap(params);
      this.subjectQueryParamMap.next(this._testQueryParamMap);
  }

  get snapshot() {
      return {
          paramMap: this.testParamMap,
          queryParamMap: this.testQueryParamMap
      }
  }
};

class mockViewportScroller {
  public scrollToPosition([num1, num2]): void {}
}

class mockProjectService {
  private defaultProject: Project = {
    projectId: 'default',
    title: 'default',
    thumbSrc: 'default',
    featuredImage: 'default',
    alt: 'default',
    subtitle: 'default',
    text: 'default',
    skills: ['default'],
    link: 'default'
  };
  public currentProject$: Observable<Project> = of(this.defaultProject);
  public allProjects$: Observable<Array<Project>> = of([this.defaultProject]);
  public setCurrentProject(id): void {}
  public setNextProject(id): string {
    return 'test';
  }
  public setPreviousProject(id): string {
    return 'test';
  }

}

class mockLocation {
  public replaceState(string): void {}
}

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ProjectComponent ],
      providers: [
        { provide: ViewportScroller, useClass: mockViewportScroller },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: ProjectService, useClass: mockProjectService },
        { provide: Location, useClass: mockLocation }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ProjectComponent);
      component = fixture.componentInstance;
      const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;      
      activatedRoute.testQueryParamMap = {id: 'test'};
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call setProject', () => {
      // ARRANGE
      const componentAny: any = component as any;
      spyOn(componentAny, 'setProject');

      // ACT
      componentAny.ngOnInit();
      
      // ASSERT
      expect(componentAny.setProject).toHaveBeenCalled();
    });

    it('should call scrollToPosition', () => {
      // ARRANGE
      const scroll = fixture.debugElement.injector.get(ViewportScroller) as any;
      const componentAny: any = component as any;
      spyOn(componentAny.scroll, 'scrollToPosition');
      
      // ACT
      componentAny.ngOnInit();

      // ASSERT
      expect(componentAny.scroll.scrollToPosition).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('unsubscribes when destroyed', () => {
      // ARRANGE
      const componentAny: any = component as any;
      componentAny.destroy$ = new Subject<boolean>();

      // ACT
      componentAny.ngOnDestroy();

      // ASSERT
      expect(componentAny.destroy$.closed).toBe(true);
    });
  });

  describe('prevProject', () => {
    it('should call setPreviousProject and return a projectId', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const expectedId = 'test';
      spyOn(component.projectService, 'setPreviousProject').and.returnValue(expectedId); 

      // ACT
      component.prevProject();

      // ASSERT
      expect(component.projectService.setPreviousProject).toHaveBeenCalled();
    });

    it('should update the projectId', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const expectedId = 'test';
      spyOn(component.projectService, 'setPreviousProject').and.returnValue(expectedId); 

      // ACT
      component.prevProject();

      // ASSERT
      expect(component.projectId).toBe(expectedId);
    });

    it('should call updateLocation', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const expectedId = 'test';
      const componentAny: any = component as any;
      spyOn(componentAny, 'updateLocation'); 
      spyOn(component.projectService, 'setPreviousProject').and.returnValue(expectedId); 

      // ACT
      componentAny.prevProject();

      // ASSERT
      expect(componentAny.updateLocation).toHaveBeenCalled();
    });

    it('should call scrollToPosition', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const scroll = fixture.debugElement.injector.get(ViewportScroller) as any;
      const expectedId = 'test';
      const componentAny: any = component as any;
      spyOn(component.projectService, 'setPreviousProject').and.returnValue(expectedId); 
      spyOn(componentAny.scroll, 'scrollToPosition');

      // ACT
      componentAny.prevProject();

      // ASSERT
      expect(componentAny.scroll.scrollToPosition).toHaveBeenCalled();
    });
  });

  describe('nextProject', () => {
    it('should call setNextProject and return a projectId', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const expectedId = 'test';
      spyOn(component.projectService, 'setNextProject').and.returnValue(expectedId); 

      // ACT
      component.nextProject();

      // ASSERT
      expect(component.projectService.setNextProject).toHaveBeenCalled();
    });

    it('should update the projectId', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const expectedId = 'test';
      spyOn(component.projectService, 'setNextProject').and.returnValue(expectedId); 

      // ACT
      component.nextProject();

      // ASSERT
      expect(component.projectId).toBe(expectedId);
    });

    it('should call updateLocation', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const expectedId = 'test';
      const componentAny: any = component as any;
      spyOn(componentAny, 'updateLocation'); 
      spyOn(component.projectService, 'setNextProject').and.returnValue(expectedId); 

      // ACT
      componentAny.nextProject();

      // ASSERT
      expect(componentAny.updateLocation).toHaveBeenCalled();
    });

    it('should call scrollToPosition', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const scroll = fixture.debugElement.injector.get(ViewportScroller) as any;
      const expectedId = 'test';
      const componentAny: any = component as any;
      spyOn(component.projectService, 'setNextProject').and.returnValue(expectedId); 
      spyOn(componentAny.scroll, 'scrollToPosition');

      // ACT
      componentAny.nextProject();

      // ASSERT
      expect(componentAny.scroll.scrollToPosition).toHaveBeenCalled();
    });
  });

  describe('setProject', () => {
    it('should update projectId', () => {
      // ARRANGE
      const expectedId = 'test';
      const componentAny: any = component as any;

      // ACT
      componentAny.setProject();

      // ASSERT
      expect(componentAny.projectId).toBe(expectedId);
    });

    it('should call projectService.setCurrentProject', () => {
      // ARRANGE
      const projectService = fixture.debugElement.injector.get(ProjectService) as any;
      const componentAny: any = component as any;
      spyOn(componentAny.projectService, 'setCurrentProject');

      // ACT
      componentAny.setProject();

      // ASSERT
      expect(componentAny.projectService.setCurrentProject).toHaveBeenCalled();
    });

    it('should call scroll.scrollToPosition', () => {
      // ARRANGE
      const scroll = fixture.debugElement.injector.get(ViewportScroller) as any;
      const componentAny: any = component as any;
      spyOn(componentAny.scroll, 'scrollToPosition');

      // ACT
      componentAny.setProject();

      // ASSERT
      expect(componentAny.scroll.scrollToPosition).toHaveBeenCalled();
    });
  });

  describe('updateLocation', () => {
    it('should call location.replaceState', () => {
      // ARRANGE
      const location = fixture.debugElement.injector.get(Location) as any;
      const componentAny = component as any;
      spyOn(componentAny.location, 'replaceState');

      // ACT
      componentAny.updateLocation();

      // ASSERT
      expect(componentAny.location.replaceState).toHaveBeenCalled();
    });
  });
});

