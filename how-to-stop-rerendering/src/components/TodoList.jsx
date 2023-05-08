import { memo } from "react";
const TodoList = ({todo, completedTodo, index}) => {
  console.log('TodoList');
  return (
    <li
      style={ todo.isCompleted === true ? {textDecorationLine: 'line-through'}:{}}
    >
      { todo.todo }
      <button onClick={() => completedTodo(index)}>完了</button>
    </li>
  )
}

export default memo(TodoList);
