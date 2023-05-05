import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { AddToDo } from './AddToDo';

export const TodoWrap = () => {
  // 初期値
  const initialState = [
    {
      task: '勉強する',
      isCompleted: false
    },
    {
      task: '買い物に行く',
      isCompleted: false
    },
    {
      task: '読書する',
      isCompleted: false
    }
  ]

  // 状態変数を状態変数を変更できる関数とセットになります。
  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <h1>ToDo List</h1>
      <AddToDo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}
