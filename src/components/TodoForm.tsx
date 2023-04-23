import { useState } from "react";
import useStore from "../hooks/useStore";

export const TodoForms = (): JSX.Element => {
  const store = useStore();
  const [content, setContent] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.todo.addTodo(content);
    setContent('');
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (<form onSubmit={onSubmit}>
      <input type="text" onChange={onChangeContent} value={content} placeholder="내용" />
      <button type="submit">입력</button>
    </form>);
}