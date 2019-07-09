import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import * as animation from './animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    animation.markedTrigger,
    animation.itemStateTrigger,
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  displayPrj: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {
  }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length >= 1) {
            this.displayPrj.push(this.projects[0]);
          }
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.unshift(project);
  }

  // todo последвательное появление
  onItemAnimated(ev: AnimationEvent, lastId: number) {
    if (ev.fromState !== 'void') {
      return;
    }
    if (this.projects.length > lastId + 1) {
      this.displayPrj.push(this.projects[lastId + 1]);
    } else {
      this.projects = this.displayPrj;
    }
  }
}
