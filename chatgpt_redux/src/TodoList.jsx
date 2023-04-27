import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../actions';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = (event) => {
    event.preventDefault();
    dispatch(addTask({ id: Date.now(), name: newTask }));
    setNewTask('');
  }

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  }

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
            <span style={{ textDecoration: task.completed ? 'line-through': 'none'}}>{task.name}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default TodoList;