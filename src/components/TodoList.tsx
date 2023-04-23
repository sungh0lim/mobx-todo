import { useObserver } from "mobx-react";
import useStore from "../hooks/useStore";
import { TodoItem } from "./TodoItem";

export const TodoList = (): JSX.Element => {
  const store = useStore();

  return useObserver(() => <div>
    {store.todo.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
  </div>);
}