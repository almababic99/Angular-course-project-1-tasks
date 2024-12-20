import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";   // type definition
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,   // we don't need this if we want to use ngmodule instead of standalone components
  // imports: [CardComponent, DatePipe],   // we don't need this if we want to use ngmodule instead of standalone components
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
