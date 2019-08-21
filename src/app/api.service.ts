import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './todo';
import { map,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

 getAllTodos(): Observable<Todo[]> {
    return this.httpClient
    .get(API_URL + '/todos')
    .pipe(map((response: any) => {
      debugger
      const todos=response //.json()
      return todos.map((todo) => new Todo(todo));
    }))
    .pipe(catchError(this.handleError))
  }
 
  getTodoById(id:number):Observable<Todo>{
      return this.httpClient
      .get(API_URL+'/todos/'+id)
      .pipe(map((response:any)=>{
          return new Todo(response)
        }))
      .pipe(catchError(this.handleError))
  }

  createTodo(todo:Todo):Observable<Todo>{
    return this.httpClient
    .post(API_URL+'/todos',todo)
    .pipe(map((response:any)=>{
      debugger
      return new Todo(response)
    }))
    .pipe(catchError(this.handleError))
  }

  updateToto(todo:Todo):Observable<Todo>{
    return this.httpClient
    .put(API_URL+'/todos/'+todo.id,todo)
    .pipe(map((response:any)=>{
      return new Todo(response)
    }))
    .pipe(catchError(this.handleError))
  }
  deleteTodo(todoId:number):Observable<null>{
    return this.httpClient
    .delete(API_URL+'/todos/'+todoId)
    .pipe(map(response=>null))
    .pipe(catchError(this.handleError))
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
