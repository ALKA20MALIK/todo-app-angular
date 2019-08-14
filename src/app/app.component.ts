import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  private todoDataService: TodoDataService;
  newTodo: Todo = new Todo();

  constructor(todoDataService: TodoDataService) {
    this.todoDataService = todoDataService;
  }

  addTodo(){
    if(this.newTodo.title){
      this.todoDataService.addTodo(this.newTodo);
    }
    this.newTodo=new Todo();
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }
  get todos(){
    return this.todoDataService.getAllTodos();
  }
}
