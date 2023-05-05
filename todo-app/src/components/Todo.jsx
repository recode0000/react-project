

import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from "./TodoList";

const Todo = () => {
  //初期値
  const initialState = [
    {
      task: '読書する',
      isCompleted: false
    },
    {
      task: '運動する',
      isCompleted: false
    },
    {
      task: '買い物に行く',
      isCompleted: true
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <div>

      <h1>ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;