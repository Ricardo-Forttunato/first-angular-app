import { Component, Output, EventEmitter, Input, Inject } from '@angular/core';

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string; 
  //a alternative way to use question mark(?) is to use union type like this: @Input() name: string | undefined;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  constructor (@Inject(TasksService) private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks () {
    return this.tasksService.getUsertasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
