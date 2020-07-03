import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project'

@Component({
  selector: 'app-portfolio-thumbnail',
  templateUrl: './portfolio-thumbnail.component.html',
  styleUrls: ['./portfolio-thumbnail.component.less']
})
export class PortfolioThumbnailComponent implements OnInit {
  @Input() public project: Project; 

  public constructor() { }

  public ngOnInit(): void {
  }

}
