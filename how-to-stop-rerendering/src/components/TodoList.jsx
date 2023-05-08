import { memo } from "react";
const TodoList = ({todo}) => {
  console.log('TodoList');
  return (
    <li>
      { todo.todo }
    </li>
  )
}

export default memo(TodoList);
