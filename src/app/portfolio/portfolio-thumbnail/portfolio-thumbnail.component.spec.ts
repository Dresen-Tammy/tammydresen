import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThumbnailComponent } from './portfolio-thumbnail.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
