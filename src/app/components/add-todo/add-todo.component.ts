import { ADD_TODO } from './../../shared/actions/todo.action';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppStore } from 'src/app/store';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private ngRedux:NgRedux<IAppStore>) { }

  ngOnInit(): void {
  }
  addTask(item:HTMLInputElement){
    this.ngRedux.dispatch({type: ADD_TODO,newItem :item.value})
    item.value = ' '
  }
}
