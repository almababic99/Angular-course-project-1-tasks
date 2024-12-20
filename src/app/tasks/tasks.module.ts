import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";   // for date pipe
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],   // app component uses only tasks component so we only add that one
    imports: [SharedModule, CommonModule, FormsModule]
})

export class TasksModule {}