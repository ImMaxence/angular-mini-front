import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../../core/task-service.service';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-task-page',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
  taskService = inject(TaskServiceService)
  newTaskTitle = ""

  get() {
    return this.taskService.getTasks()
  }

  add() {
    this.taskService.addTask(this.newTaskTitle)
  }

  toggle(task: Task) {
    this.taskService.toggleTask(task)
  }

  delete(task: Task) {
    this.taskService.deleteTask(task.id)
  }
}
