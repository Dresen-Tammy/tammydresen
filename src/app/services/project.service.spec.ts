import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';

let routerSpy = {navigate: jasmine.createSpy('navigate')};

describe('ProjectService', () => {
  let service: any;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the currentProject with the default project', () => {
    // ARRANGE
    const expectedId = 'default';

    // ACT

    // ASSERT
    expect(service.currentProjectBS.getValue().projectId).toBe(expectedId);
  });

  it('should initialize the AllProject with the project list', () => {
    // ARRANGE
    const expectedId = 'glacier';

    // ACT

    // ASSERT
    expect(service.allProjectsBS.getValue()[0].projectId).toBe(expectedId);
  });

  describe('setCurrentProject', () => {
    it('should call getProjectByProjectId', () => {
      // ARRANGE
      spyOn(service, 'getProjectByProjectId');

      // ACT
      service.setCurrentProject('glacier');

      // ASSERT
      expect(service.getProjectByProjectId).toHaveBeenCalled();
    });

    it('should set the currentProjectBS to the new project if it exists', () => {
      // ARRANGE
      const expectedProject = {
        projectId: 'glacier',
        title: 'Glacier Marketing Website',
        thumbSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1594136602/tammydresen/glaciermark-thumb_kqfcxg.jpg',
        featuredImage: 'glacierMarketingFeature.jpg',
        alt: 'glaciermark website',
        subtitle: 'Website rebuild in Angular 9',
        text: 'Glacier Marketing had a WordPress website that was slow, and was hacked repeatedly. I rebuilt their website in Angular 9, with a light-weight Google Cloud Functions backend.  To make it SEO friendly and fast I used prerendering and lazy-loading, and served the images from an AWS S3 bucket. The site is mobile first and fully responsive. The new site improved loading speeds to 3 times faster on mobile and 2 times faster on desktop according to Google Page Speed Insigts.',
        skills: ['Angular 9', 'TypeScript', 'HTML5/CSS3', 'TypeScript','Firebase','Cloud Functions','Adobe Photoshop', 'AWS S3'],
        link: 's://glaciermark.com/'
      };
      spyOn(service, 'getProjectByProjectId').and.returnValue(expectedProject);

      // ACT
      service.setCurrentProject(expectedProject.projectId);
      
      // ASSERT
      expect(service.currentProjectBS.getValue()).toBe(expectedProject);
    });

    it('should navigate to the error page if project doesn\'t exist', () => {
      // ARRANGE
      const projectId = 'wrong';
      spyOn(service, 'getProjectByProjectId').and.returnValue(undefined);

      // ACT
      service.setCurrentProject(projectId);

      // ASSERT
      expect(routerSpy.navigate).toHaveBeenCalledWith(['error']);
    });
  });

  describe('setPreviousProject', () => {
    it('should call getPrevProjectId', () => {
      // ARRANGE
      spyOn(service, 'getPrevProjectId');

      // ACT
      service.setPreviousProject('glacier');
      
      // ASSERT
      expect(service.getPrevProjectId).toHaveBeenCalled();
    });

    it('should call setCurrentProject if prevProjectId exists', () => {
      // ARRANGE
      spyOn(service, 'getPrevProjectId').and.returnValue('glacier');
      spyOn(service, 'setCurrentProject');
      
      // ACT
      service.setPreviousProject();

      // ASSERT
      expect(service.setCurrentProject).toHaveBeenCalled();
    });

    it('should return prevProjectId if prevProjectId exists', () => {
      // ARRANGE
      const expectedResult: string = 'glacier'
      spyOn(service, 'getPrevProjectId').and.returnValue(expectedResult);
      // ACT
      const result: string = service.setPreviousProject();

      // ASSERT
      expect(result).toBe(expectedResult);
    });

    it('should return projectId if prevProjectId does not exist', () => {
      // ARRANGE
      const expectedResult = 'hello'
      spyOn(service, 'getPrevProjectId').and.returnValue(undefined);

      // ACT
      const result = service.setPreviousProject(expectedResult);
    
      // ASSERT
      expect(result).toBe(expectedResult);
    });
  });

  describe('setNextProject', () => {
    it('should call getNextProjectId', () => {
      // ARRANGE
      spyOn(service, 'getNextProjectId');

      // ACT
      service.setNextProject('glacier');
      
      // ASSERT
      expect(service.getNextProjectId).toHaveBeenCalled();
    });

    it('should call setCurrentProject if nextProjectId exists', () => {
      // ARRANGE
      spyOn(service, 'getNextProjectId').and.returnValue('glacier');
      spyOn(service, 'setCurrentProject');
      
      // ACT
      service.setNextProject();

      // ASSERT
      expect(service.setCurrentProject).toHaveBeenCalled();
    });

    it('should return nextProjectId if nextProjectId exists', () => {
      // ARRANGE
      const expectedResult: string = 'glacier'
      spyOn(service, 'getNextProjectId').and.returnValue(expectedResult);
      // ACT
      const result: string = service.setNextProject();

      // ASSERT
      expect(result).toBe(expectedResult);
    });

    it('should return projectId if nextProjectId does not exist', () => {
      // ARRANGE
      const expectedResult = 'hello'
      spyOn(service, 'getNextProjectId').and.returnValue(undefined);

      // ACT
      const result = service.setNextProject(expectedResult);
    
      // ASSERT
      expect(result).toBe(expectedResult);
    });
  });

  describe('getNextProjectByProjectId', () => {
    it('should get the index of the currentProject, increment it and return the next projectId if index not greater than list length', () => {
      // ARRANGE
      const expectedId = 'rideKeeper';
      const currentId = 'mariasha';
      service.setCurrentProject(currentId);

      // ACT
      const result = service.getNextProjectId();

      // ASSERT
      expect(result).toBe(expectedId);
    });

    it('should get the index of the currentProject, increment it and return the next projectId if index not greater than list length', () => {
      // ARRANGE
      const expectedId = 'glacier';
      const currentId = 'rideKeeper';
      service.setCurrentProject(currentId);

      // ACT
      const result = service.getNextProjectId();

      // ASSERT
      expect(result).toBe(expectedId);
    });

    describe('getPrevProjectByProjectId', () => {
      it('should get the index of the currentProject, increment it and return the next projectId if index not greater than list length', () => {
        // ARRANGE
        const expectedId = 'mariasha';
        const currentId = 'rideKeeper';
        service.setCurrentProject(currentId);
  
        // ACT
        const result = service.getPrevProjectId();
  
        // ASSERT
        expect(result).toBe(expectedId);
      });
  
      it('should get the index of the currentProject, increment it and return the last projectId if index less than 0', () => {
        // ARRANGE
        const expectedId = 'rideKeeper';
        const currentId = 'glacier';
        service.setCurrentProject(currentId);
  
        // ACT
        const result = service.getPrevProjectId();
  
        // ASSERT
        expect(result).toBe(expectedId);
      });
    });
  });
});
