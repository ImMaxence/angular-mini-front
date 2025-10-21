import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks: Task[] = []

  getTasks(): Task[] {
    return this.tasks
  }

  addTask(title: string): void {
    let newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false
    }

    this.tasks.push(newTask)
  }

  deleteTask(taskId: number): void {
    let toDeleteId = this.tasks.findIndex(item => item.id === taskId)

    // si task id trouvée
    if (toDeleteId !== -1) {
      this.tasks.splice(toDeleteId, 1)
    }
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed
  }

}
