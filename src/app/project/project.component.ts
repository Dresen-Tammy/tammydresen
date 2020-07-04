import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit, OnDestroy {
  public projectId: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public constructor(
    private route: ActivatedRoute, 
    public projectService: ProjectService
  ) { }

  public ngOnInit(): void {
    this.setProject();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private setProject() {
    console.log('here');
    this.route.queryParamMap.subscribe(
      data => {
        console.log('here2');
        const params = data['params'];
        const id = params['id'];
        console.log(id);
        this.projectId = id
        this.projectService.setCurrentProject(id);
        console.log('here3');
    },
    takeUntil(this.destroy$)
    )
  }

}
