import { useState } from 'react';

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState("");

  // INPUTタグに表示する
  const handleNewTask = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (task === "") return;

    //状態変数Todosの配列をスプレッド構文で新しい配列を作成
    setTodos(todos => [...todos, { task, isCompleted: false }]);

    //タスクを追加後、INPUTタグから値を消す
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task :
      <input value={task} placeholder="例）勉強する" onChange={handleNewTask} />
    </form>
  );
};

export default AddTodo;