import { useState, useCallback, useMemo } from 'react'
import { ChildArea } from './ChildArea';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = e => setText(e.target.value);

  const oncClickOpen = () => setOpen(!open);

  //レンダリング最適化 useCallback();
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //レンダリング最適化 useMemo()
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={oncClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
