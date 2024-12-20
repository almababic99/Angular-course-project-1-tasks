import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './task/tasks.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,   // we don't need this if we want to use ngmodule instead of standalone components
  // imports: [TaskComponent, NewTaskComponent],  // we don't need this if we want to use ngmodule instead of standalone components; we add it to app.module.ts
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;

  // @Input() name: string | undefined;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}    
  // Dependency injection 
  // You tell Angular which type of value you need and Angular creates it and provides it as an argument.

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
