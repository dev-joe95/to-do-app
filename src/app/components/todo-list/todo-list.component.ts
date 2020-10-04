import { FETCH_TODOS, DELETE_TODO } from './../../shared/actions/todo.action';
import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from "@angular-redux/store";
import { IAppStore } from 'src/app/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  constructor(private ngRedux:NgRedux<IAppStore>) {
    this.ngRedux.dispatch({type: FETCH_TODOS})
  }

  ngOnInit(): void {
  }
  deleteTask(id:string){
    this.ngRedux.dispatch({type: DELETE_TODO, itemId: id})
  }
}
