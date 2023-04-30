import { useState } from 'react';
import './App.css';
import { InputForm } from './components/inputForm';
import { Title } from './components/title';
import { TodoList } from './components/todoList';

function App() {
  // 状態を管理する変数とそれを変更する関数
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
