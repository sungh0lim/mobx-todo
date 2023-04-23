import useStore from "../hooks/useStore";
import { TodoData } from "../stores/todo";

interface TodoItemProps {
  todo: TodoData;
}
  
export const TodoItem = ({ todo }: TodoItemProps): JSX.Element => {
  const store = useStore();

  const removeItem = (id: TodoData['id']) => () => {
    store.todo.removeTodo(id);
  }

  return (<div>
    <input type="checkbox" />
    <span>{todo.content}</span>
    <span onClick={removeItem(todo.id)}>❌</span>
  </div>);
}