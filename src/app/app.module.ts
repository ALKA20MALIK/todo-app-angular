import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoDataService } from './todo-data.service';
import { InputPropertyComponent } from './test/input-property/input-property.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListItemComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [ApiService,TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
