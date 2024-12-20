import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";   // Exports required infrastructure for all Angular apps; we add this so the frontend will be displayed
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    // declarations: [AppComponent],   // if a component is added to declarations it can't be a standalone (in app.component.ts)
    // in declarations we add all the components that should know about each other; all the components that are being used by AppComponent
    // because of HeaderComponent, UserComponent, TasksComponent are standalone components we can't add them to declarations, so we add them in imports:
    // imports: [HeaderComponent, UserComponent, TasksComponent, BrowserModule],    
    // imports array is not only for adding standalone components but also for including other modules
    // declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, TaskComponent, NewTaskComponent],  
    // declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, TaskComponent, NewTaskComponent],  
    // imports: [BrowserModule, FormsModule], 
    declarations: [AppComponent, HeaderComponent, UserComponent], 
    // imports: [BrowserModule, FormsModule, SharedModule], 
    imports: [BrowserModule, SharedModule, TasksModule], 
    bootstrap: [AppComponent]   // array of root component so that Angular knows that with which component to start the application
    // only root modules have bootstrap configuration
})

export class AppModule {}

/*
Angular modules are containers for different parts of your application. They group related components, directives, services, and other code into cohesive units. 
Modules help you organize your code, make it more maintainable, and allow for better separation of concerns.
*/

/* 
Standalone components are a new type of Angular component that does not need to be declared in a NgModule.
These are components that can be used directly in the template of another component without being part of an NgModule, or imported in an NgModule.
*/