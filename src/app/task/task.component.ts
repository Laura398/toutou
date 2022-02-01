import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskId!: number;
  isDone!: boolean;
  confirmed!: boolean;
  task!: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.task = 'Nouvelle tâche'
    this.confirmed = false;
  }

  switchIsDone(): void {
    this.isDone = !this.isDone;
    if (this.isDone && !this.confirmed) {
      this.switchConfirm();
    }
  }

  switchConfirm(): void {
    this.confirmed = !this.confirmed;
  }

  orderBottles(bottleCount: number): void {
    console.log(`Alert quantity : ${bottleCount}`)
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }

}
