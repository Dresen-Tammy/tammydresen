import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThumbnailComponent } from './portfolio-thumbnail.component';
import { Project } from 'src/app/models/project';

const project: Project = {
  projectId: 'testId',
  title: 'test',
  thumbSrc: 'test',
  featuredImage: 'test',
  alt: 'test',
  subtitle: 'test',
  text: 'test',
  skills: ['test'],
  link: 'test'
}

describe('PortfolioThumbnailComponent', () => {
  let component: PortfolioThumbnailComponent;
  let fixture: ComponentFixture<PortfolioThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThumbnailComponent);
    component = fixture.componentInstance;
    
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Arrange
    

    // Act

    // Assert
    expect(component).toBeTruthy();
  });
});

