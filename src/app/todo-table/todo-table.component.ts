import {Component} from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo'
import { TodoListComponent } from '../todo-list/todo-list.component';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-todo-table',
  styleUrls: ['todo-table.component.css'],
  templateUrl: 'todo-table.component.html',
})
export class TodoTableComponent {
  displayedColumns: ITodo[] = [];
  dataSource = TodoService;
}
