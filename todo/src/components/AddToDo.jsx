import React, { useState } from 'react'

export const AddToDo = ({ setTodos }) => {
  const [task, setTask] = useState("");

  //inputタグに表示する
  const handleNewTask = e => {
    setTask(e.target.value);
  }

  const handleSubmit = e => {
    // 初期動作をキャンセルします。
    e.preventDefault();

    //空であればなにも起きない
    if(task === "") return;

    //空であればなにも起きない
    setTodos(todos => [...todos, { task, isCompleted: false}]);
    setTask("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        新しいタスク
        <input type="text" value={task} placeholder='例）読書する' onChange={handleNewTask} />
      </form>
    </>
  )
}
