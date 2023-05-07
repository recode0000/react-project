import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleCreateUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: name
    })
    .then(response => {
      setUsers([...users, response.data])
    })
    .catch(error => {
      console.log(error);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      setUsers(users.filter(user => user.id !== id))
    })
    .catch(error => console.log(error))
  }

  const modifyUser = (id) => {
    axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      name: 'John Doe'
    })
    .then(response => {
      let updataUsers = users.map(user => {
        if(user.id === response.data.id) {
          return response.data
        } else {
          return user;
        }
      })
      setUsers(updataUsers)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleCreateUser}>作成</button>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}>{user.name}:
            <button onClick={() => deleteUser(user.id)}>削除</button>
            <button onClick={() => modifyUser(user.id)}>更新</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
