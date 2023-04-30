import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementByAmount] = useState("2");
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        onChange={e => setIncrementByAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}
export default App;