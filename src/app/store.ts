import { Todo } from './shared/models/todo';
import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./shared/actions/todo.action";
import { tassign } from "tassign";

export interface IAppStore {
  todos: Todo[];

}

export const INIT_STATE: IAppStore = {
  todos: []
};

export const rootReducer = (state: IAppStore = INIT_STATE, action): IAppStore => {
  switch (action.type) {
    case FETCH_TODOS:
      let todosArr: Todo[] = [
        { id: '1', title: 'Fix Issus', isCompleted: false },
        { id: '2', title: 'Development', isCompleted: false },
        { id: '3', title: 'Testing', isCompleted: false },
      ]
      return tassign(state, { todos: todosArr })
      break;
    case ADD_TODO:
      let newAddedItem: Todo = {
        id: '4',
        title: action.newItem,
        isCompleted: false
      }
      return tassign(state, { todos: state.todos.concat(newAddedItem) })
      break;
    case DELETE_TODO:
      let newDelArr = state.todos.filter(todo => todo.id !== action.itemId)
      return { todos: newDelArr }
      break;

    case UPDATE_TODO:

      break;

    default:
      return state;
      break;
  }
}
