import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";

// Services and dependency injection
// You can outsource data and logic from a component into a service and then inject that service into all the components that might be interested in the data or methods in service
@Injectable({providedIn: 'root'})  // in order to make a class/service injectable: Angular can create instance
export class TasksService {
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks){
            this.tasks = JSON.parse(tasks);
        }
      }
      /* 
       a constructor for a class that loads a list of tasks from localStorage (the browser's local storage) when an object is initialized. 
       If tasks exist in localStorage, they are parsed from JSON format and assigned to this.tasks. If no tasks are found, this.tasks is initialized as an empty array.
       The purpose of this code is to retrieve saved task data from the browser's local storage, allowing the data to persist even after the page is refreshed.
      */

      getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
      }

      removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
      /*
      The saveTasks() method saves the tasks array to localStorage as a JSON string, ensuring that the data persists across page refreshes.
      This is used to store the current state of tasks so that they can be retrieved later from localStorage.
      */
} 