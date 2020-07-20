import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThumbnailComponent } from './portfolio-thumbnail.component';
import { Project } from 'src/app/models/project';
import { ProjectComponent } from 'src/app/project/project.component';
import { Component } from '@angular/core';

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

@Component({
  selector: 'app-project',
  template: ''
})
class MockProjectComponent {}

describe('PortfolioThumbnailComponent', () => {
  let component: PortfolioThumbnailComponent;
  let fixture: ComponentFixture<PortfolioThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThumbnailComponent, MockProjectComponent ]
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

