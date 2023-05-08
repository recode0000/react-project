import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const handleOnChange = (e) => setName(e.target.value);
  const handleOnClick = (e) => inputEl.current.focus()
  const inputEl = useRef(null);
  const inputInput = useRef(null);
  const handleSetCount = () => setCount(count + 1);
  const countRef = useRef(0);
  const handleSetCount2 = () => countRef.current++;

  return (
    <>
      <div className="App">
          <input ref={inputEl} type="text" value={name} onChange={handleOnChange}/>
          <p>Name:{name}</p>
          <button onClick={handleOnClick}>フォーカスを当てる</button>
      </div>
      <div style={{ margin: "2em" }}>
        <button onClick={() => inputInput.current.click()}>ファイル</button>
        <input ref={inputInput} type="file" />
      </div>
      <div>
        <div>{ count }</div>
        <button onClick={handleSetCount}>useState カウントアップ</button>
        <div>{ countRef.current }</div>
        <button onClick={handleSetCount2}>useRef カウントアップ</button>
      </div>
    </>
  );
}

export default App;
