import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  newTodo: Todo = new Todo();
  todos:Todo[]=[]
  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(){
     this.todoDataService
     .getAllTodos()
     .subscribe(
       (todos)=>{
        this.todos=todos
       }
     );
  }

  onAddTodo(todo:Todo) {
    if(todo.title){
      this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
      //this.newTodo = new Todo();
    }
   
  }

  toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

}
