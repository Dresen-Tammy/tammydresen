import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../services/project.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {

  public constructor(public projectService: ProjectService) { }

  public ngOnInit(): void {

  }

}
