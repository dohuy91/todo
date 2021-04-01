import React from 'react';
import {TodoListItem} from './TodoListItem';

const todos: Todo[] = [
  {
    text: 'Walk the dog',
    isCompleted: false
  },
  {
    text: 'Write app',
    isCompleted: true
  }
];

function App() {
  return (
    <ul>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
