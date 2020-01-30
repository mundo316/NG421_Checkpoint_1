import { Component,OnInit } from '@angular/core';
import {ITodo} from './interfaces/itodo';
import {TodoService} from './services/todo.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Todos";
  
  ngOnInit() {

  }
}
