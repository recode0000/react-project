import { memo } from "react";
import TodoList from "./TodoList"

const Todo = ({todos, completedTodo}) => {
  console.log('Todo');
  return (
    <ul>
      {todos.map((todo, index) =>
        <TodoList
          todo={todo}
          key={index}
          completedTodo={completedTodo}
          index={index}
        />
      )}
    </ul>
  )
}

export default memo(Todo);
