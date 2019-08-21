import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId:number=0;
  todos:Todo[]=[]
  constructor(private api:ApiService) { }


  addTodo(todo:Todo):Observable<Todo>{
    return this.api.createTodo(todo)
  }
  deleteTodoById(id:number):Observable<Todo>{
    return this.api.deleteTodo(id)
  }

  updateTodoById(todo:Todo):Observable<Todo>{
    return this.api.updateToto(todo);
  }
  // Simulate GET /todos
  getTodoById(id:number): Observable<Todo> {
    return this.api.getTodoById(id)
  }
  
    // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
      return this.api.getAllTodos();
  }

  toggleTodoComplete(todo: Todo){
    // let updatedTodo = this.updateTodoById(todo.id, {
    //   complete: !todo.complete
    // });
    // return updatedTodo;
  }


}
