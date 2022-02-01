import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from './task.service';
import { ITask } from './itask';
import { IReport } from './ireport';
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hotel';
  tasks!: ITask[];
  reports!: IReport[];
  taskSubscription!: Subscription;
  reportSubscription!: Subscription;

  isTask!: boolean;

  constructor(private taskService: TaskService, private reportService: ReportService) {
   }

  ngOnInit(): void {
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
    });
    this.reportSubscription = this.reportService.reports$.subscribe((reports: IReport[]) => {
      this.reports = reports;
    });
    this.isTask = true;
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    };
    if (this.reportSubscription) {
      this.reportSubscription.unsubscribe();
    }
  }

  switchIsTask(): void {
    this.isTask = true;
  }

  switchIsReport(): void {
    this.isTask = false;
  }
}
