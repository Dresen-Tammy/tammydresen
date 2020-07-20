import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProjectService } from '../services/project.service';
import { Location, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit, OnDestroy {
  public projectId: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  public constructor(
    public projectService: ProjectService,
    public scroll: ViewportScroller,
    private route: ActivatedRoute, 
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.setProject();
    this.scroll.scrollToPosition([0,0]);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public prevProject(): void {
    const prevId = this.projectService.setPreviousProject(this.projectId);
    this.projectId = prevId;
    this.updateLocation(prevId);
    this.scroll.scrollToPosition([0,0]);
  }

  public nextProject(): void {
    const nextId = this.projectService.setNextProject(this.projectId);
    this.projectId = nextId;
    this.updateLocation(nextId);
    this.scroll.scrollToPosition([0,0]);    
  }

  private setProject(): void {
    this.route.queryParamMap.subscribe(
      data => {
        console.log(data);
        const params = data['params'];
        const id = params['id'];
        this.projectId = id
        this.projectService.setCurrentProject(id);
      },
    takeUntil(this.destroy$)
    )
    this.scroll.scrollToPosition([0,0]);
  }

  private updateLocation(projectId: string): void {
    this.location.replaceState('/project?id=' + projectId);
  }
}
