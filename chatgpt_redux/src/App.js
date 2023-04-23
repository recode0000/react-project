import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlide";

function App() {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <dvi>
        <button onClick={() => dispatch(decrement())}></button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}></button>
      </dvi>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(increment(incrementValue))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default App;
