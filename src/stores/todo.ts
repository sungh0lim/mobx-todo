import { observable } from 'mobx';

export interface TodoData {
  id: number;
  content: string;
  checked: boolean;
}

interface Todo {
  todos: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const todo = observable<Todo>({
  todos: [],
  currentId: 0,

  addTodo(content) {
    this.todos.push({ id: this.currentId, content, checked: false });
    this.currentId++;
  },
  removeTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    
    if (id !== -1) {
      this.todos.splice(index, 1);
    }
  },
});