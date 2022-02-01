import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: ITask[] = [
    {
      id: 1
    },
    {
      id: 2
    }
  ];

  public tasks$: BehaviorSubject<ITask[]>;

  constructor() {
    this.tasks$ = new BehaviorSubject<ITask[]>(this.tasks);
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((x) => x.id === taskId);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.tasks$.next(this.tasks);
    }
  }

  addTask(): void {
    const id = this.tasks.length === 0 ? 1 :
      Math.max.apply(Math, this.tasks.map((task) => {
        return task.id;
      })) + 1;
    this.tasks.push({
      id
    });
    console.log(this.tasks)
    this.tasks$.next(this.tasks);
  }
}