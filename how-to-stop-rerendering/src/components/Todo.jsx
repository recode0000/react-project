import { memo } from "react";
import TodoList from "./TodoList"

const Todo = ({todos}) => {
  console.log('Todo');
  return (
    <ul>
      {todos.map((todo, index) =>
        <TodoList todo={todo} key={index} />
      )}
    </ul>
  )
}

export default memo(Todo);
