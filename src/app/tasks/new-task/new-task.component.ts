import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';    // features for forms
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,   // we don't need this if we want to use ngmodule instead of standalone components
  // imports: [FormsModule],   // we don't need this if we want to use ngmodule instead of standalone components
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);   // alternative for constructor injection in task.component.ts

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId
  );
  this.close.emit();
  }
}
