import React from 'react';
import { TodoForms } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div>
      <h1>MobX TODO</h1>
      <section>
        <TodoForms />
        <TodoList />
      </section>
    </div>
  );
}

export default App;
