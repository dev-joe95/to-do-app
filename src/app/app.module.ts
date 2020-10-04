import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppStore, INIT_STATE, rootReducer } from './store';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppStore>, private devTool: DevToolsExtension) {
    const enhancer = (isDevMode) ? [devTool.enhancer()] : [];
    this.ngRedux.configureStore(rootReducer, INIT_STATE, [], enhancer);
  }
}
