import { useState, useCallback } from 'react';
import './App.css';
import Todo from "./components/Todo"

function App() {
  console.log('App')

  const initialTask = [
    {
      todo: 'learn vue.js',
      isCompleted: false
    },
    {
      todo: 'learn React',
      isCompleted: false
    },
    {
      todo: 'learn Laravel',
      isCompleted: false
    },
  ]

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(initialTask)

  const inputTodo = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(todos => [...todos, {todo: todo, isCompleted: false}])
    setTodo('')
  }

  const completedTodo = useCallback(index => {
    let newTodos = todos.map((todo, todoIndex) => {
      if(todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    })
    setTodos(newTodos);
  }, [todos]);

  return (
    <div style={{margin: "2em"}}>
      <form onSubmit={ addTodo }>
        <input type="text" onChange={inputTodo} value={todo} />
      </form>
      <Todo todos={todos} completedTodo={completedTodo} />
    </div>
  );
}

export default App;
