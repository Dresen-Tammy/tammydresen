import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PortfolioComponent } from './portfolio.component';
import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-portfolio-thumbnail',
  template: ''
})
class MockPortfolioThumbnail {
  @Input() public project: Project;
}

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ PortfolioComponent, MockPortfolioThumbnail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
