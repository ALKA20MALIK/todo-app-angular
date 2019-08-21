import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  constructor(private todoDataService:TodoDataService) { }

  ngOnInit() {
  }

  @Input() 
  todos:Todo[]

  onToggleTodoComplete(todo:Todo){
    this.todoDataService.toggleTodoComplete(todo)
  }
  onRemoveTodo(todo:Todo){
    this.todoDataService
    .deleteTodoById(todo.id)
    .subscribe(
      (_)=>{
        this.todos=this.todos.filter(t=>t.id!=todo.id)
      }
    );

  }

}
